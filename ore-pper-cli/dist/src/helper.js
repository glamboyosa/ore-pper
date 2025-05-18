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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.twStringWithSC = exports.twString = exports.framerStringWithSC = exports.framerString = void 0;
exports.checkForDependencyInPackageJson = checkForDependencyInPackageJson;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function checkForDependencyInPackageJson(dependencyName) {
    const cwd = process.cwd();
    const packageJsonPath = path.join(cwd, "package.json");
    try {
        fs.accessSync(packageJsonPath, fs.constants.F_OK);
        const packageJsonContent = require(packageJsonPath);
        const dependencies = packageJsonContent.dependencies || {};
        const devDependencies = packageJsonContent.devDependencies || {};
        if (dependencies[dependencyName]) {
            return true;
        }
        else if (devDependencies[dependencyName]) {
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
const framerString = `
import { motion } from "@motion/react";

type StepperProps = {
  currentStep: number;
  numberOfSteps?: number;
  onStepClick?: (step: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeWidth?: string;
  inactiveWidth?: string;
};

const Stepper = ({ 
  currentStep, 
  numberOfSteps = 3,
  onStepClick,
  activeColor = "hsl(214, 93%, 55%)",
  inactiveColor = "#E6E8EA",
  activeWidth = "20px",
  inactiveWidth = "8px"
}: StepperProps) => {
  const steps = Array.from({ length: numberOfSteps }, (_, i) => i + 1);
  const isClickable = typeof onStepClick === "function";
  
  return (
    <div className="flex items-center gap-1">
      {steps.map((step) => (
        <motion.div
          layout
          key={step}
          initial={false}
          animate={{
            width: currentStep === step ? activeWidth : inactiveWidth,
            backgroundColor: currentStep === step ? activeColor : inactiveColor,
          }}
          className={\`h-2 rounded-full \${isClickable ? "cursor-pointer" : ""}\`}
          onClick={() => isClickable && onStepClick(step)}
          whileHover={isClickable ? { scale: 1.1 } : undefined}
          whileTap={isClickable ? { scale: 0.95 } : undefined}
        />
      ))}
    </div>
  );
};

export default Stepper;
        `;
exports.framerString = framerString;
const framerStringWithSC = `
        "use client";
        import { motion } from "@motion/react";

        type StepperProps = {
          currentStep: number;
          numberOfSteps?: number;
          onStepClick?: (step: number) => void;
          activeColor?: string;
          inactiveColor?: string;
          activeWidth?: string;
          inactiveWidth?: string;
        };
        
        const Stepper = ({ 
          currentStep, 
          numberOfSteps = 3,
          onStepClick,
          activeColor = "hsl(214, 93%, 55%)",
          inactiveColor = "#E6E8EA",
          activeWidth = "20px",
          inactiveWidth = "8px"
        }: StepperProps) => {
          const steps = Array.from({ length: numberOfSteps }, (_, i) => i + 1);
          const isClickable = typeof onStepClick === "function";
          
          return (
            <div className="flex items-center gap-1">
              {steps.map((step) => (
                <motion.div
                  layout
                  key={step}
                  initial={false}
                  animate={{
                    width: currentStep === step ? activeWidth : inactiveWidth,
                    backgroundColor: currentStep === step ? activeColor : inactiveColor,
                  }}
                  className={\`h-2 rounded-full \${isClickable ? "cursor-pointer" : ""}\`}
                  onClick={() => isClickable && onStepClick(step)}
                  whileHover={isClickable ? { scale: 1.1 } : undefined}
                  whileTap={isClickable ? { scale: 0.95 } : undefined}
                />
              ))}
            </div>
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
              <div className="flex">
                {numberOfPills.map((step) => (
                  <div
                    key={step}
                    className={\` h-2 transition-all duration-100 delay-100 ease-in-out cursor-pointer mx-1 rounded-full \${step === currentStep ? "bg-blue-500 w-5" : "bg-[#E6E8EA] w-2"}\`}
                  />
                ))}
              </div>
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
              <div className="flex">
                {numberOfPills.map((step) => (
                  <div
                    key={step}
                    className={\` h-2 transition-all duration-100 delay-100 ease-in-out cursor-pointer mx-1 rounded-full \${step === currentStep ? "bg-blue-500 w-5" : "bg-[#E6E8EA] w-2"}\`}
                  />
                ))}
              </div>
            );
          };
          
          export default Stepper;
    `;
exports.twStringWithSC = twStringWithSC;
//# sourceMappingURL=helper.js.map