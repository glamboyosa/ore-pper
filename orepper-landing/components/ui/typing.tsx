"use client";
import { TypeAnimation } from "react-type-animation";

const TypingComponent = () => {
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
      speed={60}
      cursor={true}
      repeat={Infinity}
      className=" text-left bg-yellow-200 w-full p-1 md:w-[70%] lg:w-1/2 mt-3 whitespace-nowrap rounded-sm"
    />
  );
};
export default TypingComponent;
