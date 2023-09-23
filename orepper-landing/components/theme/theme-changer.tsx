"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./svgs";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {resolvedTheme === "light" ? (
        <SunIcon onClick={() => setTheme("dark")} width={24} height={24} />
      ) : (
        <MoonIcon onClick={() => setTheme("light")} width={24} height={24} />
      )}
    </AnimatePresence>
  );
};
export default ThemeChanger;
