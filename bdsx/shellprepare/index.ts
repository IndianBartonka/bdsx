import * as colors from 'colors';
import * as fs from 'fs';
import * as glob from 'glob';
import * as ts from "typescript";
import { shellPrepareData } from "./data";

const BDSX_PERMANENT = process.env.BDSX_PERMANENT === 'true';
const RESTART_TIME_THRESHOLD = 30000;

const data = shellPrepareData.load();

function checkTargetExists(pathes:string[], targets:string[]):string[] {
    function check(str:string):void {
        let n = targets.length;
        for (let i=0;i!==n;i=i+1|0) {
            if (str.endsWith(targets[i])) {
                n = n-1|0;
                targets[i] = targets[n];
                targets.length = n;
                break;
            }
        }
    }

    for (const p of pathes) {
        check(p);
    }
    return targets;
}

function unsupportedNodeJs():never {
    console.error(colors.red(`Unsupported node.js version`));
    console.error(colors.red(`current: ${process.version}`));
    console.error(colors.red(`required: v8.1`));
    throw Error(`Unsupported node.js version ${process.version}`);
}

function build():void {
    function getTsConfig():ts.ParsedCommandLine {
        const curdir = process.cwd();
        const configPath = ts.findConfigFile(curdir, ts.sys.fileExists);
        if (configPath == null) {
            return {
                options: ts.getDefaultCompilerOptions(),
                fileNames: glob.sync('**/*.ts'),
                errors: [],
            };
        }
        const configFileJson = ts.readConfigFile(configPath, ts.sys.readFile);
        return ts.parseJsonConfigFileContent(configFileJson.config, ts.sys, curdir);
    }

    try {
        const config = getTsConfig();
        if (config.fileNames.length === 0) {
            console.error(colors.yellow('[WARN] Any TS files were not found'));
            console.error(colors.yellow('[WARN] The compilation was skipped'));
        } else {
            const notFoundList = checkTargetExists(config.fileNames, [
                `/bdsx/init.ts`,
            ]);
            for (const item of notFoundList) {
                console.error(colors.yellow(`[WARN] ${item} not found`));
            }
        }

        let files:string[];
        if (config.options.outDir == null && config.options.outFile == null && config.options.out == null) {
            files = [];
            for (const ts of config.fileNames) {
                if (!ts.endsWith('.ts')) continue;
                const js = ts.substr(0, ts.length-2)+'js';
                const ts_stat = fs.statSync(ts);
                if (ts_stat.mtimeMs === undefined) {
                    unsupportedNodeJs();
                }
                try {
                    const js_stat = fs.statSync(js);
                    if (ts_stat.mtimeMs >= js_stat.mtimeMs) {
                        files.push(ts);
                    }
                } catch (err) {
                    if (err.code === 'ENOENT') {
                        files.push(ts);
                    } else {
                        throw err;
                    }
                }
            }
        } else {
            files = config.fileNames;
        }
        if (files.length !== 0) {
            ts.createProgram(files, config.options).emit();
        }
    } catch (err) {
        console.error(err.stack);
        exit(-1);
    }
}

function exit(exitCode:number):never {
    if (exitCode === 1) {
        delete data.exit;
        shellPrepareData.save(data);
    } else {
        shellPrepareData.clear();
    }
    process.exit(exitCode);
}

function firstLaunch():never {
    build();
    data.startAt = Date.now()+'';
    exit(1);
}

function relaunch(buildTs:boolean):void {
    console.log(`It will restart after 3 seconds.`);
    setTimeout(()=>{
        if (buildTs) build();
        exit(1);
    }, 3000);
}

function repeatedLaunch():void {
    const exitCode = +data.exit;
    switch (exitCode) {
    case 0:
        if (data.relaunch === '1') {
            relaunch(false);
            return;
        }
        if (BDSX_PERMANENT) {
            relaunch(true);
            return;
        }
        break;
    default: {
        console.log(`Exited with code ${(exitCode < 0  || exitCode > 0x1000000) ? '0x'+(exitCode >>> 0).toString(16) : exitCode}`);

        const startTime = +data.startAt;
        const passed = Date.now() - startTime;
        if (passed > RESTART_TIME_THRESHOLD) {
            // re-launch
            relaunch(false);
            return;
        }
        break;
    }
    }
    exit(0);
}

if (data.exit == null) {
    firstLaunch();
} else {
    repeatedLaunch();
}
