"use client";

import { ClipboardIcon } from "@heroicons/react/24/outline";
import Code from "./code";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { copyTextToClipboard } from "@/lib/copyToClipboard";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const pkgs = ["npm", "yarn", "pnpm"];
const Installation = () => {
  const code = `npx ore-pper-cli`;
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  return (
    <Code className="mt-4 w-3/4 justify-start">
      <pre className="whitespace-pre-line text-slate-200 ml-2">{code}</pre>
      <Popover open={open}>
        <PopoverTrigger onClick={() => setOpen(true)} className="ml-auto">
          {" "}
          <ClipboardIcon
            width={20}
            height={20}
            fill="#fff"
            className="ml-auto cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col divide-y-2 cursor-pointer justify-center items-center gap-1 ">
          {pkgs.map((el) => (
            <div
              key={el}
              onClick={async () => {
                try {
                  await copyTextToClipboard(
                    el === "pnpm" ? "pnpm dlx ore-pper-cli" : code
                  );
                  toast({
                    title: "Success ✅",
                    description: "Successfully copied to clipboard",
                  });
                  setOpen(false);
                } catch (error) {
                  setOpen(false);
                  toast({
                    title: "❌",
                    description: "Something went wrong copying to clipboard",
                  });
                }
              }}
              className=" divide-solid  p-[2px] divide-gray-300 w-full last-of-type:divide-y-0 last-of-type:divide-none hover:bg-zinc-100"
            >
              {el}
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </Code>
  );
};

export default Installation;
