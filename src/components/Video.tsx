import Image from "next/image";

interface PersonProps {
  src: string;
  name: string;
}

export default function Person({ src, name }: PersonProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex aspect-video max-h-72 items-center overflow-hidden rounded-xl">
        <Image src={src} width={500} height={500} alt={src} />
      </div>
      <span className="text font-medium text-green">{name}</span>
    </div>
  );
}
