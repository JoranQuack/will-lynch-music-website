import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Will Lynch Music</h1>
      <Image
        src="logo.svg"
        alt="Will Lynch Music"
        width={1280}
        height={720}
      />
    </main>
  );
}
