import Installation from "@/components/code/installation";
import Spotlight from "@/components/ui/spotlight";
import TypingComponent from "@/components/ui/typing";

export default function Home() {
  return (
    <main className="mt-10">
      <h1
        className={
          "ml-2 text-4xl flex flex-col text-center md:text-5xl  w-full p-2  mb-2"
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
