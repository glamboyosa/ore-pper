export default function (feature: {
  twStepper: () => string;
  framerStepper: () => string;
}) {
  (feature.twStepper = () => {
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
                    className={\` h-2 transition-all duration-100 delay-100 ease-in-out cursor-pointer mx-1 rounded-full \${step === currentStep ? "bg-primaryBrand w-5" : "bg-[#E6E8EA] w-2"}\`}
                  />
                ))}
              </>
            );
          };
          
          export default Stepper;
    `;
    return twString;
  }),
    (feature.framerStepper = () => {
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
  console.log(numberOfPills.length);
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
      return framerString;
    });
}
