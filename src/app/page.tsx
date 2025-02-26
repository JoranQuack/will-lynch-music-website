import Block from "@/components/Block";
import Homeslide from "@/components/Homeslide";
import Person from "@/components/Person";
import Video from "@/components/Video";
import Image from "next/image";
import SVG from "react-inlinesvg";

export default function Home() {
  return (
    <main>
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
      <section id="browse" className="px-36 py-20">
        <div className="mb-10 flex w-full justify-center">
          <h1 className="font-bold text-green">BROWSE</h1>
        </div>
        <div className="mb-10 grid grid-cols-5 gap-5">
          <Block
            id="arrangements"
            className="col-span-3 text-dark"
            bgColor="bluey"
            title="ARRANGEMENTS"
            description="Discover my arranging style through these examples."
          />
          <Block
            id="arrangements-custom"
            className="col-span-2 text-green"
            bgColor="greeny"
            title="CUSTOM ARRANGEMENTS"
            description="Commission your custom arrangement today."
          />
          <Block
            id="tracks-custom"
            className="col-span-2 text-green"
            bgColor="greeny"
            title="YOUR TRACKS"
            description="Personalized practice tracks designed to meet your specific needs."
          />
          <Block
            id="tracks"
            className="col-span-3 text-dark"
            bgColor="pinky"
            title="LEARNING TRACKS"
            description="Browse available learning tracks."
          />
        </div>
      </section>
      <section id="expertise">
        <div id="voice-lessons" className="grid grid-cols-2 bg-bluey">
          <div className="flex flex-col gap-5 px-36 pb-14 pt-20 text-dark">
            <h1 className="font-bold">VOICE LESSONS</h1>
            <p>
              Since going through the Specialist Music Programme in high school,
              I&apos;ve fostered a passion for science-backed vocal education. I
              believe that great singing is achieved through an accessible
              understanding of what is going on in our body, which helps to
              facilitate growth and development for anyone regardless of where
              they are in their vocal journey. I would love to work with you to
              develop your vocal chops and musicianship!
            </p>
            <a className="round-button bg-dark text-white" href="#contact">
              GET IN TOUCH
            </a>
          </div>
          <div className="flex items-center bg-[url(/voice-lessons.png)] bg-cover bg-center" />
        </div>
        <div id="ensemble" className="grid grid-cols-2 bg-pinky">
          <div className="flex items-center bg-[url(/ensemble-coaching.png)] bg-cover bg-center" />
          <div className="flex flex-col gap-5 pb-14 pl-24 pr-36 pt-20 text-dark">
            <h1 className="font-bold">ENSEMBLE COACHING</h1>
            <p>
              I ❤️ barbershop a lot and I ❤️ helping groups to develop skills in
              barbershop. I&apos;ve amassed a strong knowledge base of the
              barbershop craft and style through 10 years of experience singing
              and performing in some wonderful groups, including the current
              BHNZ silver medallist quartet Promenade and current Australasian
              silver medallist chorus Quantum Acoustics (I get to direct them
              every week!). I&apos;m currently a certified Musicality judge in
              the Australasian Guild of Barbershop Judges, and I would love to
              work with your group to help you find all the best ways to connect
              with your audience and achieve your goals.
            </p>
            <a className="round-button bg-dark text-white" href="#contact">
              GET IN TOUCH
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between gap-32 bg-greeny px-36 py-20">
          <div className="flex w-1/4 flex-col gap-5 text-green">
            <h1 className="">
              YEP, I&apos;M A <br /> <b>PERFORMER</b>
            </h1>
            <p>
              I&apos;m a versatile vocal performer with a diverse background in
              musical theatre, opera, cabaret, burlesque, and barbershop stage
              experience. I love getting involved in great projects, and am so
              lucky to have collaborated with some fantastic people!
            </p>
            <a className="round-button bg-green text-white" href="#contact">
              GET IN TOUCH
            </a>
          </div>
          <div>
            <h2>PEOPLE I&apos;VE WORKED WITH</h2>
            <div className="mt-5 grid grid-cols-2 gap-8">
              <Person src="/cso.jpg" name="Christchurch Symphony Orchestra" />
              <Person src="/tec.jpg" name="The Entertainment Company" />
              <Person src="/ck.jpg" name="Cirko Kali" />
              <Person src="/wbf.jpg" name="World Buskers Festival" />
            </div>
          </div>
          <div>
            <h2>PERFORMANCE CLIPS</h2>
            <div className="mt-5 grid grid-cols-2 gap-8">
              <Video src="/voice-lessons.png" name="Me being cool" />
              <Video src="/voice-lessons.png" name="Me being cool" />
              <Video src="/voice-lessons.png" name="Me being cool" />
              <Video src="/voice-lessons.png" name="Me being cool" />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-white px-36 py-20 text-dark">
        <div className="grid grid-cols-2 gap-36">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-green">GET IN TOUCH</h1>
              <p>
                Want to purchase, enquire, or simply say hi? Don&apos;t
                hesitate, get in contact. I&apos;d love to hear from you via
                phone or email!
              </p>
            </div>
            <p>
              <b>EMAIL ME:</b> <br />
              will@willlynchmusic.co.nz
            </p>
            <p>
              <b>PHONE ME:</b> <br />
              021 2345 6789
            </p>
          </div>
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-2">
              <input type="text" className="w-full" placeholder="First Name" />
              <input type="text" className="w-full" placeholder="Last Name" />
            </div>
            <input type="text" className="w-full" placeholder="Email" />
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <a className="round-button bg-green text-white">SEND</a>
          </form>
        </div>
      </section>
      <footer className="relative flex items-end justify-between overflow-hidden bg-green px-36 pb-20 pt-72">
        <SVG src="/logo.svg" className="fill-white" />
        <p className="text-white">Site by Joran Le Quellec</p>
        <SVG
          src="/mic.svg"
          className="absolute bottom-0 left-3/4 h-full w-full translate-x-[40%] translate-y-[50%] scale-[200%] transform fill-black opacity-10"
        />
      </footer>
    </main>
  );
}
