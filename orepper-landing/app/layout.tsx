import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en">
      <body className={cn("min-h-screen", PF.className)}>
        <Header />
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
