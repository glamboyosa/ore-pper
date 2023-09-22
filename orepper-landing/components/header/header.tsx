import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex bg-slate-50 p-3  border-b-[1px] border-black w-full items-center">
      <div className="flex items-center gap-3">
        <CursorArrowRippleIcon width={24} height={24} />
        <span className="text-lg md:text-xl">Ore-pper</span>
      </div>
      <Link href={"https://github.com/glamboyosa/ore-pper"} className="ml-auto mr-2" target="_blank">
        <GitHubLogoIcon width={24} height={24} />
      </Link>
    </div>
  );
};

export default Header;
