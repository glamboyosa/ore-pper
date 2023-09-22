"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useState } from "react";
import Stepper from "../stepper";
import { Button } from "./button";
import { createOnboardingData } from "@/lib/utils";
import { data } from "@/lib/data";
import CardContent from "../card-content";
export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [step, setStep] = useState(1);
  const onboardingData = createOnboardingData([data[0], data[1], data[2]]);
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layout
      className="group relative max-w-md w-[448px] text-center h-[650px]   rounded-xl border border-white/10 bg-slate-50 px-8 py-16 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute text-black -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(30, 30, 30, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <CardContent data={onboardingData[step]} />
      <div className="mt-8 gap-4 flex items-center">
        <Stepper currentStep={step} />

        <div className="items-center gap-2 flex ml-auto mr-2">
          <Button
            variant={"outline"}
            className="rounded-sm px-8 py-3 bg-zinc-200"
            disabled={step === 1}
            onClick={() => {
              if (step === 1) {
                return;
              }
              setStep((prevStep) => prevStep - 1);
            }}
          >
            Previous
          </Button>
          <Button
            disabled={step === 3}
            className="rounded-sm px-8 py-3 cursor-pointer"
            onClick={() => {
              if (step === 3) {
                return;
              }
              setStep((prevStep) => prevStep + 1);
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
