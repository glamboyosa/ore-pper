"use client"
import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

const COMMANDS: { [key in PackageManager]: string } = {
    npm: "npx ore-pper-cli@latest",
    pnpm: "pnpm dlx ore-pper-cli@latest",
    yarn: "yarn dlx ore-pper-cli@latest",
    bun: "bunx --bun ore-pper-cli@latest",
};

export function InstallTabs() {
    const [selected, setSelected] = useState<PackageManager>("npm");
    const copyPromise = async (selected: PackageManager) => {
        try {
            await navigator.clipboard.writeText(COMMANDS[selected])

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto my-8">
            <div className="flex gap-1 mb-2 bg-gray-100 p-1 rounded-lg">
                {(Object.keys(COMMANDS) as PackageManager[]).map((pm) => (
                    <button
                        key={pm}
                        onClick={() => setSelected(pm)}
                        className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${selected === pm
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        {pm}
                    </button>
                ))}
            </div>
            <div className="relative bg-gray-900 rounded-lg p-4 overflow-hidden">
                <div className="absolute top-4 right-4 flex gap-1">
                    <button
                        onClick={() => {
                            toast.promise(copyPromise(selected), {
                                loading: "Copying to clipboard...",
                                success: "Command copied to clipboard",
                                error: "Failed to copy to clipboard",
                            })
                        }}
                        className="text-gray-400 hover:text-gray-300 transition-colors cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                    </button>
                </div>
                <motion.pre
                    key={selected}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gray-300 font-mono text-sm"
                >
                    $ {COMMANDS[selected]}
                </motion.pre>
            </div>
        </div>
    );
} 