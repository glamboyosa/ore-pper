import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

type CodeProps = {
  className?: string;
};
const inter = Inter({ subsets: ["latin"] });

const Code = ({ className, children }: PropsWithChildren<CodeProps>) => {
  return (
    <div
      className={cn(
        "rounded-md flex w-full  items-center p-3 bg-slate-800",
        className && className,
        inter.className
      )}
    >
      {children}
    </div>
  );
};

export default Code;
