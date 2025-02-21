import Homeslide from "@/components/Homeslide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section id="home" className="w-screen h-screen">
        <Homeslide />
      </section>
      <section
        id="about"
        className="w-screen bg-green pr-36 flex justify-center items-center z-20"
      >
        <Image
          src="/will_about.png"
          width={1000}
          height={1000}
          alt="will_about"
          className="-mr-60"
        />
        <div className="flex flex-col gap-3 w-1/3">
          <h1 className="font-semibold text-white">ABOUT ME</h1>
          <h2 className="text-greeny text-xl font-medium">
            Your friendly neighborhood freelance musician!
          </h2>
          <p className="text-white">
            Kia ora! I&apos;m Will, and I&apos;m a freelance musician based in
            Ōtautahi, Aotearoa. I&apos;ve been singing and making music for just
            about 10 years, with 5 years of professional experience in various
            fields of performing, singing, arranging and recording. I&apos;m
            currently studying towards a Bachelor&apos;s degree in Music at the
            University of Canterbury and would love to get amongst anything
            musical, so If there&apos;s anything you&apos;re interested in
            please don&apos;t hesitate to get in touch!
          </p>
        </div>
      </section>
    </main>
  );
}
