"use client";
import useMounted from "@/lib/useMounted";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const TypingComponent = () => {
  const [mounted] = useMounted();
  if (!mounted) {
    return (
      <span className="bg-yellow-200 w-[83%] p-1 md:w-[70%] lg:w-1/2 mt-3 h-14 rounded-sm"></span>
    );
  }
  return (
    <TypeAnimation
      sequence={[
        "Onboarding Screens",
        2000,
        "Multi-Step Forms",
        2000,
        "Anything!",
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className=" text-left bg-yellow-200 w-[83%] p-1 md:w-[70%] lg:w-1/2 mt-3 whitespace-nowrap rounded-sm"
    />
  );
};
export default TypingComponent;
