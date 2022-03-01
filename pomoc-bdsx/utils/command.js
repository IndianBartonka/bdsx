"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MCCmd = void 0;
const launcher_1 = require("bdsx/launcher");
var MCCmd;
(function (MCCmd) {
    MCCmd.run = launcher_1.bedrockServer.executeCommand;
    MCCmd.runOnConsole = launcher_1.bedrockServer.executeCommandOnConsole;
    /**@deprecated use MCCmd.run instead*/
    MCCmd.runCmd = MCCmd.run;
    /**@deprecated use MCCmd.runOnConsole instead*/
    MCCmd.runCmdOnConsole = MCCmd.runOnConsole;
    function getPlayerByEntity(actor) {
        return actor.isPlayer() ? actor : undefined;
    }
    MCCmd.getPlayerByEntity = getPlayerByEntity;
    function Feedback(str, target) {
        if (target)
            MCCmd.runCmd(`tellraw ${target.getName()} {"rawtext":[{"text":"${str}"}]}`);
    }
    MCCmd.Feedback = Feedback;
    function Log(str, prefix = "Feedback") {
        console.log(`[${prefix}]`, str.replace(/§(\w{1})|(\d{1})/g, ""));
    }
    MCCmd.Log = Log;
})(MCCmd = exports.MCCmd || (exports.MCCmd = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsNENBQThDO0FBQzlDLElBQWlCLEtBQUssQ0FxQnJCO0FBckJELFdBQWlCLEtBQUs7SUFDTCxTQUFHLEdBQUcsd0JBQWEsQ0FBQyxjQUFjLENBQUM7SUFDbkMsa0JBQVksR0FBRyx3QkFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQ2xFLHNDQUFzQztJQUN6QixZQUFNLEdBQUcsTUFBQSxHQUFHLENBQUM7SUFDMUIsK0NBQStDO0lBQ2xDLHFCQUFlLEdBQUcsTUFBQSxZQUFZLENBQUM7SUFFNUMsU0FBZ0IsaUJBQWlCLENBQUMsS0FBWTtRQUMxQyxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUZlLHVCQUFpQixvQkFFaEMsQ0FBQTtJQUVELFNBQWdCLFFBQVEsQ0FBQyxHQUFXLEVBQUUsTUFBMEI7UUFDNUQsSUFBSSxNQUFNO1lBQ04sTUFBQSxNQUFNLENBQ0YsV0FBVyxNQUFPLENBQUMsT0FBTyxFQUFFLHlCQUF5QixHQUFHLE1BQU0sQ0FDakUsQ0FBQztJQUNWLENBQUM7SUFMZSxjQUFRLFdBS3ZCLENBQUE7SUFDRCxTQUFnQixHQUFHLENBQUMsR0FBVyxFQUFFLE1BQU0sR0FBRyxVQUFVO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUZlLFNBQUcsTUFFbEIsQ0FBQTtBQUNMLENBQUMsRUFyQmdCLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQXFCckIifQ==