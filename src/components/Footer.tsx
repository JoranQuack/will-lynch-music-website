import SVG from "react-inlinesvg";

export default function Footer() {
  return (
    <footer className="relative flex items-end justify-between overflow-hidden bg-green px-36 pb-20 pt-72">
      <SVG src="/logo.svg" className="fill-white" />
      <div className="flex flex-col items-end gap-2 text-right">
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
