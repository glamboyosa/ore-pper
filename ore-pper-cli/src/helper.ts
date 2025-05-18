import * as fs from "fs";
import * as path from "path";

function checkForDependencyInPackageJson(dependencyName: string) {
  const cwd = process.cwd(); // Get the current working directory

  const packageJsonPath = path.join(cwd, "package.json");

  try {
    fs.accessSync(packageJsonPath, fs.constants.F_OK);

    const packageJsonContent = require(packageJsonPath);

    // Check if the specified dependency is in the dependencies object
    const dependencies = packageJsonContent.dependencies || {};
    const devDependencies = packageJsonContent.devDependencies || {};
    if (dependencies[dependencyName]) {
      return true;
    } else if (devDependencies[dependencyName]) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}
const framerString = `
import { motion } from "motion/react";

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
const framerStringWithSC = `
        "use client";
        import { motion } from "motion/react";

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
export {
  checkForDependencyInPackageJson,
  framerString,
  framerStringWithSC,
  twString,
  twStringWithSC,
};
