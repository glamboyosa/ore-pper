import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/header/header";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { Toaster } from "sonner";
const PF = Playfair_Display({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "ore-pper",
  description: "Quality stepper component for your design needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen", PF.className)}>
        <Providers>
          <Header />
          <div className="flex flex-col justify-center items-center">
            {children}
          </div>
        </Providers>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
