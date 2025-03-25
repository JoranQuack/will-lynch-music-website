import Block from "@/app/Block";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Homeslide from "@/app/Homeslide";
import Person from "@/app/Person";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section id="home" className="block h-screen w-screen">
        <Homeslide />
      </section>
      <section
        id="about"
        className="z-20 flex w-screen flex-col-reverse items-center justify-center bg-green px-8 pt-20 lg:flex-row lg:pr-36 lg:pt-0"
      >
        <Image
          src="/will_about.png"
          width={1000}
          height={1000}
          alt="will_about"
          className="-mt-7 lg:-mr-60 lg:mt-0"
        />
        <div className="flex w-full flex-col gap-3 lg:w-1/3">
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
      <section id="browse" className="px-8 py-10 lg:px-36 lg:py-20">
        <div className="mb-10 flex w-full justify-center">
          <h1 className="font-bold text-green">BROWSE</h1>
        </div>
        <div className="mb-10 grid grid-cols-5 gap-5">
          <Block
            id="arrangements"
            className="col-span-5 bg-bluey text-dark lg:col-span-3"
            title="ARRANGEMENTS"
            description="Discover my arranging style through these examples."
          />
          <Block
            id="arrangements-custom"
            className="col-span-2 hidden bg-greeny text-green lg:block"
            title="CUSTOM ARRANGEMENTS"
            description="Commission your custom arrangement today."
          />
          <Block
            id="tracks-custom"
            className="col-span-2 hidden bg-greeny text-green lg:block"
            title="YOUR TRACKS"
            description="Personalized practice tracks designed to meet your specific needs."
          />
          <Block
            id="tracks"
            className="col-span-5 bg-pinky text-dark lg:col-span-3"
            title="LEARNING TRACKS"
            description="Browse available learning tracks."
          />
        </div>
      </section>
      <section id="expertise">
        <div
          id="voice-lessons"
          className="grid grid-cols-1 bg-bluey lg:grid-cols-2"
        >
          <div className="flex flex-col items-center gap-5 px-8 py-10 text-center text-dark lg:items-start lg:px-36 lg:pb-14 lg:pt-20 lg:text-left">
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
          <div className="flex min-h-60 items-center bg-[url(/voice-lessons.png)] bg-cover bg-center" />
        </div>
        <div id="ensemble" className="grid grid-cols-1 bg-pinky lg:grid-cols-2">
          <div className="flex min-h-60 items-center bg-[url(/ensemble-coaching.png)] bg-cover bg-right-top" />
          <div className="flex flex-col items-center gap-5 px-8 py-10 text-center text-dark lg:items-start lg:px-36 lg:pb-14 lg:pl-20 lg:pt-20 lg:text-left">
            <h1 className="font-bold">ENSEMBLE COACHING</h1>
            <p>
              I&apos;m an experienced performer, director and coach with a huge
              passion for creating meaningful music and impactful performances.
              I would love to share what I can to help your group reach its full
              potential, so get in touch to book your slot today!
            </p>
            <a className="round-button bg-dark text-white" href="#contact">
              GET IN TOUCH
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 bg-greeny px-8 pt-10 lg:h-[40rem] lg:flex-row lg:gap-32 lg:pl-36 lg:pt-0">
          <div className="flex h-full w-full items-center">
            <div className="flex flex-col items-center gap-5 py-0 text-center text-green lg:w-64 lg:items-start lg:py-20 lg:text-left">
              <h1>
                YEP, I&apos;M A <br /> <b>PERFORMER</b>
              </h1>
              <p>
                I&apos;m a versatile vocal performer with a diverse background
                in musical theatre, opera, cabaret, burlesque, and barbershop
                stage experience. I love getting involved in great projects, and
                am so lucky to have collaborated with some fantastic people!
              </p>
              <a className="round-button bg-green text-white" href="#contact">
                GET IN TOUCH
              </a>
            </div>
          </div>
          <div className="flex h-full items-center py-5 lg:py-20">
            <div className="grid h-96 w-80 grid-cols-2 gap-5">
              <h2 className="col-span-2">PEOPLE I&apos;VE WORKED WITH</h2>
              <Person src="/tto.jpg" name="Toi Toi Opera" />
              <Person src="/tec.jpg" name="The Entertainment Company" />
              <Person src="/ck.jpg" name="Cirko Kali" />
              <Person src="/wbf.jpg" name="World Buskers Festival" />
            </div>
          </div>
          <Image
            src="/performer.png"
            width={1000}
            height={1000}
            alt="performer"
            className="object-cover"
          />
        </div>
      </section>
      <Contact
        title="GET IN TOUCH"
        description="Want to purchase, enquire, or simply say hi? Don't hesitate, get in contact. I'd love to hear from you via phone or email!"
        email="willmclynchmusic@gmail.com"
        phone="021 0724 969"
      />
      <Footer />
    </main>
  );
}
