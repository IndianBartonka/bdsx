"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const command_2 = require("../utils/command");
command_1.command.register("pomoc", "pomocne komędy i porady").overload(async (params, origin) => {
    const actor = origin.getEntity();
    const ni = (actor === null || actor === void 0 ? void 0 : actor.isPlayer()) ? actor.getNetworkIdentifier() : undefined;
    if (ni) {
        command_2.MCCmd.run(`tellraw "${actor === null || actor === void 0 ? void 0 : actor.getName()}" {"rawtext":[{"text":"§e================"}]}`);
        command_2.MCCmd.run(`tellraw "${actor === null || actor === void 0 ? void 0 : actor.getName()}" {"rawtext":[{"text":"Your Information"}]}`);
        command_2.MCCmd.run(`tellraw "${actor === null || actor === void 0 ? void 0 : actor.getName()}" {"rawtext":[{"text":"Twoja informacija"}]}`);
        command_2.MCCmd.run(`tellraw "${actor === null || actor === void 0 ? void 0 : actor.getName()}" {"rawtext":[{"text":"Twoja informacija"}]}`);
        command_2.MCCmd.run(`tellraw "${actor === null || actor === void 0 ? void 0 : actor.getName()}" {"rawtext":[{"text":"Twoja informacija"}]}`);
        command_2.MCCmd.run(`tellraw "${actor === null || actor === void 0 ? void 0 : actor.getName()}" {"rawtext":[{"text":"Twoja informacija"}]}`);
        command_2.MCCmd.run(`tellraw "${actor === null || actor === void 0 ? void 0 : actor.getName()}" {"rawtext":[{"text":"§e================"}]}`);
    }
}, {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBdUM7QUFDdkMsOENBQXlDO0FBQ3pDLG1DQUErQjtBQUUvQixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDeEUsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sRUFBRSxHQUFHLENBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLElBQUksRUFBRSxFQUFFO1FBQ0osZUFBSyxDQUFDLEdBQUcsQ0FDTCxZQUFZLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLEVBQUUsK0NBQStDLENBQzlFLENBQUM7UUFDRixlQUFLLENBQUMsR0FBRyxDQUNMLFlBQVksS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE9BQU8sRUFBRSw4Q0FBOEMsWUFBSSxDQUFDLFdBQVcsQ0FDdEYsRUFBRSxDQUNMLFVBQVUsQ0FDZCxDQUFDO1FBQ0YsZUFBSyxDQUFDLEdBQUcsQ0FDTCxZQUFZLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLEVBQUUsaURBQWlELFlBQUksQ0FBQyxjQUFjLENBQzVGLEVBQUUsQ0FDTCxVQUFVLENBQ2QsQ0FBQztRQUNGLGVBQUssQ0FBQyxHQUFHLENBQ0wsWUFBWSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxFQUFFLGdEQUFnRCxZQUFJLENBQUMsYUFBYSxDQUMxRixFQUFFLENBQ0wsVUFBVSxDQUNkLENBQUM7UUFDRixlQUFLLENBQUMsR0FBRyxDQUNMLFlBQVksS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE9BQU8sRUFBRSwrQ0FBK0MsQ0FDOUUsQ0FBQztLQUNMO0FBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDIn0=