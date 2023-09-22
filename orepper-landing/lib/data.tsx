import Code from "@/components/code/code";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { copyTextToClipboard } from "./copyToClipboard";
const demo = `
function Demo() {
    const [step, setStep] = useState(1);
    const numberOfSteps = 3;
    return (
    <>
    {/* numberOfsteps is optional and defaults to 3 */</>}
    <Stepper currentStep={step} numberOfSteps={numberOfSteps} />
    </>
    )
  }
`;
const data = [
  {
    title: "FAQS",
    render: (
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Why copy/paste?</AccordionTrigger>
          <AccordionContent>
            <Link
              as="span"
              href="https://ui.shadcn.com/docs#:~:text=as%20a%20dependency%3F-,The,-idea%20behind%20this"
              target="_blank"
              className="bg-yellow-300 p-1 mr-1 hover:bg-yellow-400 hover:underline"
            >
              Shadcn
            </Link>
            has a very good guide I agree with but basically I do not want it
            tightly coupled both to design choices, dependencies and packages.
            This way it is wholly customizable.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Does it support React Server Components?
          </AccordionTrigger>
          <AccordionContent>
            Yes, it does. It supports all React frameworks.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    title: "How it works",
    render: (
      <Code className="mt-4 items-start">
        <pre className="whitespace-pre-line text-slate-50">{demo}</pre>
        <ClipboardIcon
          width={40}
          height={40}
          fill="#fff"
          className="ml-auto cursor-pointer"
          onClick={async () => {
            await copyTextToClipboard(demo);
          }}
        />
      </Code>
    ),
  },
  {
    title: "Can I see an example?",
    render: <p className="text-2xl md:text-3xl mt-4">You just used it 😉</p>,
  },
];
export { data };