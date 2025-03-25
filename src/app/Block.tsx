import Image from "next/image";

interface BlockProps {
  id: string;
  className: string;
  title: string;
  description: string;
}

export default function Block({
  id,
  className,
  title,
  description,
}: BlockProps) {
  return (
    <a
      className={`${className} group relative h-52 overflow-hidden rounded-xl lg:h-96`}
      href={`/${id.split("-").join("#")}`}
    >
      <div className="absolute z-20 flex h-full w-full flex-col items-start justify-end px-8 py-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
      <Image
        src={`/${id}.png`}
        width={3000}
        height={2000}
        alt={id}
        className="min-h-full min-w-full rounded-xl object-cover duration-500 group-hover:scale-125 group-hover:opacity-0 group-hover:blur-lg"
      />
    </a>
  );
}
