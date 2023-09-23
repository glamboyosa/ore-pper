"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./svgs";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useMounted from "@/lib/useMounted";

const ThemeChanger = () => {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted] = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence initial={false}>
      {resolvedTheme === "light" ? (
        <SunIcon
          initial={{ opacity: 0, pathLength: 0, height: 0 }}
          animate={{ opacity: 1, pathLength: 1, height: "auto" }}
          exit={{ opacity: 0, pathLength: 0, height: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          onClick={() => setTheme("dark")}
          width={26}
          height={26}
        />
      ) : (
        <MoonIcon
          initial={{ opacity: 0, pathLength: 0, height: 0 }}
          animate={{ opacity: 1, pathLength: 1, height: "auto" }}
          exit={{ opacity: 0, pathLength: 0, height: 0 }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
          }}
          onClick={() => setTheme("light")}
          width={24}
          height={24}
        />
      )}
    </AnimatePresence>
  );
};
export default ThemeChanger;
