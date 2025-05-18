
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
          className={`h-2 rounded-full ${isClickable ? "cursor-pointer" : ""}`}
          onClick={() => isClickable && onStepClick(step)}
          whileHover={isClickable ? { scale: 1.1 } : undefined}
          whileTap={isClickable ? { scale: 0.95 } : undefined}
        />
      ))}
    </div>
  );
};

export default Stepper;
