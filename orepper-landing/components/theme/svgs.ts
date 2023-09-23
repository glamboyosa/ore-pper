import { SunIcon as Sun } from "@heroicons/react/24/outline";
import { MoonIcon as Moon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
const SunIcon = motion(Sun, { forwardMotionProps: true });
const MoonIcon = motion(Moon, { forwardMotionProps: true });

export { SunIcon, MoonIcon };
