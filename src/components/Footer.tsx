import Link from "next/link";
import SVG from "react-inlinesvg";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-between gap-2 overflow-hidden bg-green px-8 pb-20 pt-72 lg:flex-row lg:items-end lg:gap-0 lg:px-36">
      <Link href="/">
        <SVG src="/logo.svg" className="fill-white" />
      </Link>
      <div className="flex flex-col items-center gap-2 text-center lg:items-end lg:text-right">
        <p className="text-white">Site by Joran Le Quellec</p>
        <p className="text-white">© {new Date().getFullYear()} Will Lynch</p>
      </div>
      <SVG
        src="/mic.svg"
        className="absolute bottom-0 left-3/4 h-full w-full translate-x-[40%] translate-y-[50%] scale-[200%] transform fill-black opacity-10"
      />
    </footer>
  );
}
