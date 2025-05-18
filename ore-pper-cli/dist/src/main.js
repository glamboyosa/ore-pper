"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = createProject;
const helper_1 = require("./helper");
const util_1 = __importDefault(require("util"));
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const fs_1 = __importDefault(require("fs"));
const execAsync = util_1.default.promisify(child_process_1.exec);
function findComponentsDirectory(startPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const possibleDirs = ['components', 'src/components', 'app/components'];
        for (const dir of possibleDirs) {
            const fullPath = path_1.default.join(startPath, dir);
            if (fs_1.default.existsSync(fullPath)) {
                return fullPath;
            }
        }
        return null;
    });
}
function createProject(_a) {
    return __awaiter(this, arguments, void 0, function* ({ useFramer, preferredPackageManager, componentsPath, usingServerComponents, formatCode = false, }) {
        const usingFramerInProject = yield (0, helper_1.checkForDependencyInPackageJson)("@motion/react");
        if (useFramer && preferredPackageManager && !usingFramerInProject) {
            yield execAsync(`${preferredPackageManager === "npm"
                ? "npm install"
                : preferredPackageManager === "pnpm"
                    ? "pnpm add"
                    : preferredPackageManager === "bun"
                        ? "bun add"
                        : "yarn add"} @motion/react`);
        }
        const rootDirectory = process.cwd();
        let resolvedComponentsPath = path_1.default.join(rootDirectory, componentsPath);
        if (!fs_1.default.existsSync(resolvedComponentsPath)) {
            const foundComponentsDir = yield findComponentsDirectory(rootDirectory);
            if (foundComponentsDir) {
                resolvedComponentsPath = foundComponentsDir;
            }
        }
        const stepperPath = path_1.default.join(resolvedComponentsPath, "stepper.tsx");
        try {
            const content = useFramer && usingServerComponents
                ? helper_1.framerStringWithSC
                : useFramer && !usingServerComponents
                    ? helper_1.framerString
                    : !useFramer && usingServerComponents
                        ? helper_1.twStringWithSC
                        : helper_1.twString;
            console.log("✨Copying `<Stepper/>` component.");
            yield promises_1.default.writeFile(stepperPath, content);
            if (formatCode) {
                const usingPrettier = yield (0, helper_1.checkForDependencyInPackageJson)("prettier");
                const usingBiome = yield (0, helper_1.checkForDependencyInPackageJson)("@biomejs/biome");
                if (usingBiome) {
                    yield execAsync(`${preferredPackageManager === "npm"
                        ? "npx"
                        : preferredPackageManager === "pnpm"
                            ? "pnpm dlx"
                            : preferredPackageManager === "bun"
                                ? "bunx --bun"
                                : "yarn"} @biomejs/biome check --apply --unsafe ${stepperPath}`);
                }
                else if (usingPrettier) {
                    yield execAsync(`${preferredPackageManager === "npm"
                        ? "npx prettier"
                        : preferredPackageManager === "pnpm"
                            ? "pnpm dlx prettier"
                            : preferredPackageManager === "bun"
                                ? "bunx prettier"
                                : "yarn prettier"} ${stepperPath} --write`);
                }
            }
            console.log("🎉Copy done");
        }
        catch (error) {
            console.log("Something went wrong:", error);
        }
        return true;
    });
}
//# sourceMappingURL=main.js.map