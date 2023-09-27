import {
  checkForDependencyInPackageJson,
  framerString,
  framerStringWithSC,
  twString,
  twStringWithSC,
} from "./helper";
import util from "util";
import { exec } from "child_process";
import path from "path";
import fs from "fs/promises";
import fss from "fs";
const execAsync = util.promisify(exec);

interface projectOptions {
  preferredPackageManager?: "npm" | "yarn" | "pnpm" | "bun";
  useFramer: boolean;
  componentsPath: string;
  usingServerComponents: boolean;
}

export async function createProject({
  useFramer,
  preferredPackageManager,
  componentsPath,
  usingServerComponents,
}: projectOptions) {
  const usingFramerInProject = await checkForDependencyInPackageJson(
    "framer-motion"
  );
  if (useFramer && preferredPackageManager && !usingFramerInProject) {
    await execAsync(
      `${
        preferredPackageManager === "npm"
          ? "npm install"
          : preferredPackageManager === "pnpm"
          ? "pnpm add"
          : preferredPackageManager === "bun"
          ? "bun install"
          : "yarn add"
      } framer-motion`
    );
  }

  const rootDirectory = process.cwd();

  const resolvedComponentsPath = path.join(rootDirectory, componentsPath);

  // if the path does not exist create it
  if (!fss.existsSync(resolvedComponentsPath)) {
    fss.mkdirSync(resolvedComponentsPath, { recursive: true });
  }
  const stepperPath = path.join(resolvedComponentsPath, "stepper.tsx");

  try {
    const content =
      useFramer && usingServerComponents
        ? framerStringWithSC
        : useFramer && !usingServerComponents
        ? framerString
        : !useFramer && usingServerComponents
        ? twStringWithSC
        : twString;
    console.log("✨Copying `<Stepper/>` component.");
    await fs.writeFile(stepperPath, content);
    console.log("🎉Copy done");
  } catch (_) {
    console.log("Something went wrong copying files...");
  }
  return true;
}
