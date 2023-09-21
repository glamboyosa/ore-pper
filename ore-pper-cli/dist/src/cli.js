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
exports.cli = void 0;
const select_1 = __importDefault(require("@inquirer/select"));
const confirm_1 = __importDefault(require("@inquirer/confirm"));
const input_1 = __importDefault(require("@inquirer/input"));
const main_1 = require("./main");
const promptforPkgManager = () => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield (0, select_1.default)({
        message: "what is your preferred package manager ?",
        choices: [
            {
                name: "npm",
                value: "npm",
            },
            {
                name: "yarn",
                value: "yarn",
            },
            {
                name: "pnpm",
                value: "pnpm",
            },
        ],
    });
    return answer;
});
function cli(args) {
    return __awaiter(this, void 0, void 0, function* () {
        args;
        const serverComponentsAnswer = yield (0, confirm_1.default)({
            message: "Are you using React Server Components ?",
        });
        const inputAnswer = yield (0, input_1.default)({
            message: "What is the path to your components folder",
            default: "/app/src/components",
        });
        const answer = yield (0, confirm_1.default)({
            message: "Would you like to use Framer Motion ?",
        });
        if (!answer) {
            yield (0, main_1.createProject)({
                useFramer: false,
                componentsPath: inputAnswer,
                usingServerComponents: serverComponentsAnswer,
            });
            return;
        }
        const pkg_manager = yield promptforPkgManager();
        yield (0, main_1.createProject)({
            preferredPackageManager: pkg_manager,
            useFramer: true,
            componentsPath: inputAnswer,
            usingServerComponents: serverComponentsAnswer,
        });
    });
}
exports.cli = cli;
//# sourceMappingURL=cli.js.map