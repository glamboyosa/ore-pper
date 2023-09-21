import select from "@inquirer/select";
import confirm from "@inquirer/confirm";
import input from "@inquirer/input";
import { createProject } from "./main";

const promptforPkgManager = async () => {
  const answer = await select({
    message: "what is your preferred package manager ?",
    choices: [
      {
        name: "npm",
        value: "npm",
      },
      {
        name: "yarn",
        value: "yarn",
      },

      {
        name: "pnpm",
        value: "pnpm",
      },
    ],
  });
  return answer as "npm" | "yarn" | "pnpm";
};
export async function cli(args: string[]) {
  args;
  const serverComponentsAnswer = await confirm({
    message: "Are you using React Server Components ?",
  });
  const inputAnswer = await input({
    message: "What is the path to your components folder",
    default: "/app/src/components",
  });
  const answer = await confirm({
    message: "Would you like to use Framer Motion ?",
  });
  if (!answer) {
    await createProject({
      useFramer: false,
      componentsPath: inputAnswer,
      usingServerComponents: serverComponentsAnswer,
    });
    return;
  }
  const pkg_manager = await promptforPkgManager();
  await createProject({
    preferredPackageManager: pkg_manager,
    useFramer: true,
    componentsPath: inputAnswer,
    usingServerComponents: serverComponentsAnswer,
  });
}
