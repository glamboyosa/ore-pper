"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.twStringWithSC = exports.twString = exports.framerStringWithSC = exports.framerString = exports.checkForDependencyInPackageJson = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function checkForDependencyInPackageJson(dependencyName) {
    const cwd = process.cwd();
    const packageJsonPath = path.join(cwd, "package.json");
    try {
        fs.accessSync(packageJsonPath, fs.constants.F_OK);
        const packageJsonContent = require(packageJsonPath);
        const dependencies = packageJsonContent.dependencies || {};
        if (dependencies[dependencyName]) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        return false;
    }
}
exports.checkForDependencyInPackageJson = checkForDependencyInPackageJson;
const framerString = `
import { motion } from "framer-motion";
type StepperProps = {
  currentStep: number;
  numberOfSteps?: number;
};

const Stepper = ({ currentStep, numberOfSteps }: StepperProps) => {
  const numberOfPills = Array.from(
    { length: numberOfSteps ?? 3 },
    (_, index) => index + 1
  );
  
  return (
    <>
      {numberOfPills.map((step) => (
        <motion.div
          layout
          key={step}
          initial={false}
          animate={{
            width: currentStep === step ? "20px" : "8px",
            backgroundColor:
              currentStep === step ? "hsl(214, 93%, 55%)" : "#E6E8EA",
          }}
          className="w-2 h-2 cursor-pointer mx-1 rounded-full bg-[#E6E8EA]"
        />
      ))}
    </>
  );
};

export default Stepper;
        `;
exports.framerString = framerString;
const framerStringWithSC = `
        "use client";
        import { motion } from "framer-motion";
        type StepperProps = {
          currentStep: number;
          numberOfSteps?: number;
        };
        
        const Stepper = ({ currentStep, numberOfSteps }: StepperProps) => {
          const numberOfPills = Array.from(
            { length: numberOfSteps ?? 3 },
            (_, index) => index + 1
          );
          
          return (
            <>
              {numberOfPills.map((step) => (
                <motion.div
                  layout
                  key={step}
                  initial={false}
                  animate={{
                    width: currentStep === step ? "20px" : "8px",
                    backgroundColor:
                      currentStep === step ? "hsl(214, 93%, 55%)" : "#E6E8EA",
                  }}
                  className="w-2 h-2 cursor-pointer mx-1 rounded-full bg-[#E6E8EA]"
                />
              ))}
            </>
          );
        };
        
        export default Stepper;
                `;
exports.framerStringWithSC = framerStringWithSC;
const twString = `
        type StepperProps = {
            currentStep: number;
            numberOfSteps?: number;
          };
          
          const Stepper = ({ currentStep, numberOfSteps }: StepperProps) => {
            const numberOfPills = Array.from(
              { length: numberOfSteps ?? 3 },
              (_, index) => index + 1
            );
          
            return (
              <>
                {numberOfPills.map((step) => (
                  <div
                    key={step}
                    className={\` h-2 transition-all duration-100 delay-100 ease-in-out cursor-pointer mx-1 rounded-full \${step === currentStep ? "bg-blue-500 w-5" : "bg-[#E6E8EA] w-2"}\`}
                  />
                ))}
              </>
            );
          };
          
          export default Stepper;
    `;
exports.twString = twString;
const twStringWithSC = `
        "use client";
        type StepperProps = {
            currentStep: number;
            numberOfSteps?: number;
          };
          
          const Stepper = ({ currentStep, numberOfSteps }: StepperProps) => {
            const numberOfPills = Array.from(
              { length: numberOfSteps ?? 3 },
              (_, index) => index + 1
            );
          
            return (
              <>
                {numberOfPills.map((step) => (
                  <div
                    key={step}
                    className={\` h-2 transition-all duration-100 delay-100 ease-in-out cursor-pointer mx-1 rounded-full \${step === currentStep ? "bg-blue-500 w-5" : "bg-[#E6E8EA] w-2"}\`}
                  />
                ))}
              </>
            );
          };
          
          export default Stepper;
    `;
exports.twStringWithSC = twStringWithSC;
//# sourceMappingURL=helper.js.map