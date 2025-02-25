import Block from "@/components/Block";
import Homeslide from "@/components/Homeslide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section id="home" className="h-screen w-screen">
        <Homeslide />
      </section>
      <section
        id="about"
        className="z-20 flex w-screen items-center justify-center bg-green pr-36"
      >
        <Image
          src="/will_about.png"
          width={1000}
          height={1000}
          alt="will_about"
          className="-mr-60"
        />
        <div className="flex w-1/3 flex-col gap-3">
          <h1 className="font-bold text-white">ABOUT ME</h1>
          <h2 className="text-xl font-medium text-greeny">
            Your friendly neighbourhood freelance musician!
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
      <section id="browse" className="px-36">
        <div className="mb-10 mt-20 flex w-full justify-center">
          <h1 className="font-bold text-green">BROWSE</h1>
        </div>
        <div className="mb-10 grid grid-cols-5 gap-5">
          <Block
            id="arrangements"
            className="col-span-3 bg-bluey text-dark"
            title="ARRANGEMENTS"
            description="Discover my arranging style through these examples."
          />
          <Block
            id="arrangements-custom"
            className="col-span-2 bg-greeny text-green"
            title="CUSTOM ARRANGEMENTS"
            description="Commission your custom arrangement today."
          />
          <Block
            id="tracks-custom"
            className="col-span-2 bg-greeny text-green"
            title="YOUR TRACKS"
            description="Personalized practice tracks designed to meet your specific needs."
          />
          <Block
            id="tracks"
            className="col-span-3 bg-pinky text-dark"
            title="LEARNING TRACKS"
            description="Browse available learning tracks."
          />
        </div>
      </section>
    </main>
  );
}
