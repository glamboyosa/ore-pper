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
    <div className="flex">
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
    </div>
  );
};

export default Stepper;
