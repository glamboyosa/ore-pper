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
exports.createProject = void 0;
const helper_1 = require("./helper");
const util_1 = __importDefault(require("util"));
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const fs_1 = __importDefault(require("fs"));
const execAsync = util_1.default.promisify(child_process_1.exec);
function createProject({ useFramer, preferredPackageManager, componentsPath, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const usingFramerInProject = yield (0, helper_1.checkForDependencyInPackageJson)("framer-motion");
        if (useFramer && preferredPackageManager && !usingFramerInProject) {
            yield execAsync(`${preferredPackageManager === "npm"
                ? "npm install"
                : preferredPackageManager === "pnpm"
                    ? "pnpm add"
                    : "yarn add"} framer-motion`);
        }
        let rootDirectory = process.cwd();
        if (__dirname.includes("dist")) {
            rootDirectory = __dirname.split("dist")[0];
        }
        const resolvedComponentsPath = path_1.default.join(rootDirectory, componentsPath);
        if (!fs_1.default.existsSync(resolvedComponentsPath)) {
            fs_1.default.mkdirSync(resolvedComponentsPath, { recursive: true });
        }
        const stepperPath = path_1.default.join(resolvedComponentsPath, "stepper.tsx");
        try {
            const content = useFramer ? helper_1.framerString : helper_1.twString;
            console.log("✨Copying `<Stepper/>` component.");
            yield promises_1.default.writeFile(stepperPath, content);
            console.log("🎉Copy done");
        }
        catch (_) {
            console.log("Something went wrong copying files...");
        }
        return true;
    });
}
exports.createProject = createProject;
//# sourceMappingURL=main.js.map