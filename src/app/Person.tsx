import Image from "next/image";

interface PersonProps {
  src: string;
  name: string;
}

export default function Person({ src, name }: PersonProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="aspect-square size-32 overflow-hidden rounded-full lg:size-[8vw]">
        <Image src={src} width={500} height={500} alt={src} />
      </div>
      <span className="text-center font-medium text-green">{name}</span>
    </div>
  );
}
