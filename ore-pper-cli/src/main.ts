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
  formatCode?: boolean;
}

async function findComponentsDirectory(startPath: string): Promise<string | null> {
  const possibleDirs = ['components', 'src/components', 'app/components'];
  for (const dir of possibleDirs) {
    const fullPath = path.join(startPath, dir);
    if (fss.existsSync(fullPath)) {
      return fullPath;
    }
  }
  return null;
}

export async function createProject({
  useFramer,
  preferredPackageManager,
  componentsPath,
  usingServerComponents,
  formatCode = false,
}: projectOptions) {
  const usingFramerInProject = await checkForDependencyInPackageJson("@motion/react");
  if (useFramer && preferredPackageManager && !usingFramerInProject) {
    await execAsync(
      `${preferredPackageManager === "npm"
        ? "npm install"
        : preferredPackageManager === "pnpm"
          ? "pnpm add"
          : preferredPackageManager === "bun"
            ? "bun add"
            : "yarn add"
      } @motion/react`
    );
  }

  const rootDirectory = process.cwd();
  let resolvedComponentsPath = path.join(rootDirectory, componentsPath);

  if (!fss.existsSync(resolvedComponentsPath)) {
    const foundComponentsDir = await findComponentsDirectory(rootDirectory);
    if (foundComponentsDir) {
      resolvedComponentsPath = foundComponentsDir;
    }
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

    if (formatCode) {
      const usingPrettier = await checkForDependencyInPackageJson("prettier");
      const usingBiome = await checkForDependencyInPackageJson("@biomejs/biome");

      if (usingBiome) {
        await execAsync(
          `${preferredPackageManager === "npm"
            ? "npx"
            : preferredPackageManager === "pnpm"
              ? "pnpm dlx"
              : preferredPackageManager === "bun"
                ? "bunx --bun"
                : "yarn"
          } @biomejs/biome check --apply --unsafe ${stepperPath}`
        );
      } else if (usingPrettier) {
        await execAsync(
          `${preferredPackageManager === "npm"
            ? "npx prettier"
            : preferredPackageManager === "pnpm"
              ? "pnpm dlx prettier"
              : preferredPackageManager === "bun"
                ? "bunx prettier"
                : "yarn prettier"
          } ${stepperPath} --write`
        );
      }
    }
    console.log("🎉Copy done");
  } catch (error) {
    console.log("Something went wrong:", error);
  }
  return true;
}
