interface BlockProps {
  id: string;
  className: string;
  title: string;
  description: string;
  bgColor: string;
}

export default function Block({
  id,
  className,
  title,
  description,
  bgColor,
}: BlockProps) {
  return (
    <a
      className={`${className} group relative h-96 overflow-hidden rounded-xl bg-[length:115%] bg-[center_60%] duration-500 hover:bg-[length:145%]`}
      href={`/${id}`}
      style={{ backgroundImage: `url(/${id}.png)` }}
    >
      <div className="absolute z-20 flex h-96 w-full flex-col items-start justify-end px-8 py-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
      <div
        className={`absolute z-10 h-full w-full rounded-xl bg-${bgColor} mix-blend-hard-light`}
      />
    </a>
  );
}
