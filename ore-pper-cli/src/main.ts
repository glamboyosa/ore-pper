import {
  checkForDependencyInPackageJson,
  framerString,
  twString,
} from "./helper";
import util from "util";
import { exec } from "child_process";
import path from "path";
import fs from "fs/promises";
import fss from "fs";
const execAsync = util.promisify(exec);

//import chalk from "chalk";
interface projectOptions {
  preferredPackageManager?: "npm" | "yarn" | "pnpm";
  useFramer: boolean;
  componentsPath: string;
}

export async function createProject({
  useFramer,
  preferredPackageManager,
  componentsPath,
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
          : "yarn add"
      } framer-motion`
    );
  }

  let rootDirectory = process.cwd();
  if (__dirname.includes("dist")) {
    rootDirectory = __dirname.split("dist")[0];
  }
  const resolvedComponentsPath = path.join(rootDirectory, componentsPath);
  // if the path does not exist create it
  if (!fss.existsSync(resolvedComponentsPath)) {
    fss.mkdirSync(resolvedComponentsPath, { recursive: true });
  }
  const stepperPath = path.join(resolvedComponentsPath, "stepper.tsx");

  try {
    const content = useFramer ? framerString : twString;
    console.log("✨Copying `<Stepper/>` component.");
    await fs.writeFile(stepperPath, content);
    console.log("🎉Copy done");
  } catch (_) {
    console.log("Something went wrong copying files...");
  }
  return true;
}
