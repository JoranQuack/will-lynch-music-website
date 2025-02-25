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
      className={`${className} group relative h-96 overflow-hidden rounded-xl`}
      href={`/${id}`}
    >
      <div className="absolute z-10 flex h-96 w-full flex-col items-start justify-end px-8 py-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
      <Image
        src={`/${id}.png`}
        width={1000}
        height={1000}
        alt={id}
        className="min-h-full min-w-full rounded-xl mix-blend-overlay blur-sm duration-500 group-hover:scale-125 group-hover:blur-none"
      />
    </a>
  );
}
