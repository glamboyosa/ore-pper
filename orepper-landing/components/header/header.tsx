import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import ThemeChanger from "../theme/theme-changer";

const Header = () => {
  return (
    <div className="flex p-3  border-b-[1px] border-black dark:border-zinc-50 w-full items-center">
      <div className="flex items-center gap-3">
        <CursorArrowRippleIcon width={24} height={24} />
        <span className="text-lg md:text-xl">Ore-pper</span>
      </div>
      <div className="flex cursor-pointer items-center ml-auto mr-2 gap-3">
        <Link href={"https://github.com/glamboyosa/ore-pper"} target="_blank">
          <GitHubLogoIcon width={24} height={24} />
        </Link>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Header;
