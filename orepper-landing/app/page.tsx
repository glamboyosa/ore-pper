import Installation from "@/components/code/installation";
import Spotlight from "@/components/ui/spotlight";
import TypingComponent from "@/components/ui/typing";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-10 ml-6 md:ml-4">
      <div className="flex justify-center items-center cursor-pointer">
        <div className=" md:w-[40%]  bg-blue-400 p-1 rounded-2xl place-items-center text-white transition hover:bg-blue-500">
          <Link
            className=" flex items-center  gap-2"
            href="https://www.linkedin.com/posts/timothy-ogbemudia-5961661a5_react-opensource-webdevelopment-activity-7111339755795038208-q0HV?utm_source=share&utm_medium=member_desktop"
            target="_blank"
          >
            <LinkedInLogoIcon className="ml-2" />
            <span className="text-base">
              Introducing ore-pper annoucement post
            </span>
            <ArrowRightIcon width={15} height={15} />
          </Link>
        </div>
      </div>
      <h1
        className={
          " text-3xl flex flex-col text-center md:text-5xl  w-full p-2  mb-2"
        }
      >
        Quality, Beautiful Stepper Component for
        <TypingComponent />
      </h1>
      <p className="ml-2 text-xl mb-4 md:2xl">
        Built with Tailwind CSS and Framer Motion ✨.
      </p>
      <div className="flex justify-center items-center">
        <Spotlight />
      </div>
      <div className="ml-4 mt-4 md:ml-0">
        <h2 className="text-2xl md:text-3xl mb-2">Installation</h2>
        <Installation />
      </div>
    </main>
  );
}
