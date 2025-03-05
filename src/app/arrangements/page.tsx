"use client";

import ArrangementBlock from "@/components/ArrangementBlock";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconMusicHeart, IconPencil, IconSend } from "@tabler/icons-react";
import { useEffect, useState } from "react";

// Define the type for our arrangement data
type Arrangement = {
  title: string;
  voicings: string;
  smp: string;
  smd: string;
  arrangedFor: string;
  parts: string;
  purpose: string;
  inspiredBy: string;
  genreStyle: string;
  tempo: string;
  difficulty: string;
};

export default function Arrangements() {
  const [arrangements, setArrangements] = useState<Arrangement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArrangements() {
      try {
        const response = await fetch("/api/sheets");

        if (!response.ok) {
          throw new Error("Failed to fetch arrangements");
        }

        const data = await response.json();
        if (data.success && data.data) {
          setArrangements(data.data);
        }
      } catch (error) {
        console.error("Error fetching arrangement data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArrangements();
  }, []);

  return (
    <main className="bg-greeny pt-40">
      <Header />
      <section id="about" className="flex w-full justify-center pb-20">
        <div className="flex w-1/3 flex-col items-center gap-5 text-center text-green">
          <h1>
            MY <b>CHARTS</b>
          </h1>
          <p>
            It all started when I started skipping my maths homework to arrange
            barbershop music in high school. Look at me now, Mum! Over the last
            7 years, I&apos;ve developed a strong skill set in providing
            customised and musically rich vocal arrangements for a variety of
            vocal ensembles locally and overseas. I&apos;m able to write for all
            voice types and ranges, and am currently a certified Musicality
            judge with the Australasian Guild of Barbershop Judges!
          </p>
          <a href="#custom" className="round-button bg-green text-white">
            ARRANGE FOR ME
          </a>
        </div>
      </section>
      <section id="arrangments" className="grid grid-cols-5 gap-10 px-36 pb-20">
        {loading ? (
          <div className="col-span-5 text-center">Loading arrangements...</div>
        ) : arrangements.length > 0 ? (
          arrangements.map((arrangement, index) => (
            <ArrangementBlock
              key={index}
              title={arrangement.title}
              src="https://drive.google.com/thumbnail?id=1_GQsSyVDuCrVzh3_pDJyPHtOndCbq_pu&sz=w500"
              href="https://drive.google.com/thumbnail?id=1_GQsSyVDuCrVzh3_pDJyPHtOndCbq_pu&sz=w500"
            />
          ))
        ) : (
          <div className="col-span-5 text-center">No arrangements found</div>
        )}
      </section>
      <section
        id="custom"
        className="grid grid-cols-3 gap-10 bg-pinky px-36 py-20"
      >
        <h1 className="col-span-3 text-center font-semibold text-dark">
          HOW IT WORKS
        </h1>
        <div className="flex flex-col items-center gap-5 text-center text-dark">
          <IconSend size={100} stroke={1.5} className="h-20 stroke-dark" />
          <p>
            Send me a song you&apos;d like me to arrange, and tell me about your
            vision! This includes your desired style, voice ranges, who&apos;s
            going to be singing it (skill level), and whether you need learning
            tracks.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 text-center text-dark">
          <IconPencil size={100} stroke={1.5} className="h-20 stroke-dark" />
          <p>
            I&apos;ll get back to you with a quote and any further questions to
            gather a full understanding of your musical vision. Once the quote
            is approved, I&apos;ll start arranging and update you with the
            progress.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 text-center text-dark">
          <IconMusicHeart
            size={100}
            stroke={1.5}
            className="h-20 stroke-dark"
          />
          <p>
            Once you have a draft arrangement you&apos;re happy with, I&apos;ll
            flick through an invoice. If you&apos;ve requested learning tracks,
            this is also the point when I&apos;ll start recording the
            arrangement.
          </p>
        </div>
      </section>
      <Contact
        title="SEND ME YOUR VISION"
        description="If you're looking for a specific version or performance of the song, add a URL to the message to show me what you're after!"
        email="willmclynchmusic@gmail.com"
        phone="021 0724 969"
      />
      <Footer />
    </main>
  );
}
