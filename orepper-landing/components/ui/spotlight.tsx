"use client";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import Stepper from "../stepper";
import { Button } from "./button";
import { createOnboardingData } from "@/lib/utils";
import { data } from "@/lib/data";
import CardContent from "../card-content";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import useMounted from "@/lib/useMounted";
export default function Spotlight() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useMounted(
    useCallback(() => {
      setTimeout(() => {
        setMounted(true);
      }, 1000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [step, setStep] = useState(1);
  const onboardingData = createOnboardingData([data[0], data[1], data[2]]);
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  if (!mounted) {
    return (
      <motion.div
        className="w-[360px] animate-pulse bg-slate-200 dark:bg-gray-50 md:w-[440px] h-[650px] rounded-xl px-8 py-16 shadow-2xl"
        style={{ background: useMotionTemplate`` }}
      ></motion.div>
    );
  }
  return (
    <motion.div
      layout
      className="group relative w-[360px] md:w-[440px] text-center h-[650px]   rounded-xl border border-white/10 bg-slate-50 dark:bg-slate-900 px-8 py-16 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute text-black -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${
                resolvedTheme === "light"
                  ? "rgba(30, 30, 30, 0.15)"
                  : "rgba(243, 238, 238, 0.15)"
              },
              transparent 80%
            )
          `,
        }}
      />
      <CardContent data={onboardingData[step]} />
      <div className="mt-14 gap-4 flex items-center md:mt-8">
        <Stepper currentStep={step} />

        <div className="items-center gap-2 flex ml-auto mr-2">
          <Button
            variant={"outline"}
            className="rounded-sm px-8 py-3 dark:bg-slate-700 bg-zinc-200"
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
      <div className="mt-2 ml-4">
        <CursorArrowRaysIcon
          width={30}
          height={30}
          className="animate-bounce"
        />
      </div>
    </motion.div>
  );
}
