import Image from "next/image";

interface ArrangementBlockProps {
  title: string;
  src: string;
  href: string;
}

export default function ArrangementBlock({
  title,
  src,
  href,
}: ArrangementBlockProps) {
  return (
    <a
      className="flex flex-col gap-3 text-center text-green duration-500 hover:scale-105 hover:opacity-80"
      href={href}
    >
      <Image
        src={src}
        height={500}
        width={500}
        alt={src}
        className="rounded-xl"
      />
      <p>{title}</p>
    </a>
  );
}
