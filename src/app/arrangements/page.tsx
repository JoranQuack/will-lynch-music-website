import ArrangementBlock from "@/app/arrangements/ArrangementBlock";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconMusicHeart, IconPencil, IconSend } from "@tabler/icons-react";
import { getGoogleSheetsData } from "@/utils/googleSheets";

export default async function Arrangements() {
  const arrangements = await getGoogleSheetsData(
    "Arrangements",
    process.env.ARRANGEMENTS_SPREADSHEET_ID
  );

  return (
    <main className="bg-greeny pt-40">
      <Header bgColour="#BDE9C9" />
      <section id="about" className="flex w-full justify-center pb-20">
        <div className="flex flex-col items-center gap-5 px-8 text-center text-green lg:w-1/3">
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
      <section
        id="arrangments"
        className="grid grid-cols-2 gap-10 px-8 pb-20 lg:grid-cols-5 lg:px-36"
      >
        {arrangements.map((arrangement) => (
          <ArrangementBlock
            title={arrangement.title}
            src={
              typeof arrangement.sampleID === "string"
                ? `https://drive.google.com/thumbnail?id=${arrangement.sampleID}&sz=w1000`
                : "/arrangement_fallback.png"
            }
            key={arrangement.title}
            arrangedFor={arrangement.arrangedFor}
            parts={arrangement.parts}
            purpose={arrangement.purpose}
            style={arrangement.genreStyle}
            difficulty={arrangement.difficulty}
            inspiredBy={arrangement.inspiredBy}
            tempo={arrangement.tempo}
            voicings={arrangement.voicings}
            smp={String(arrangement.smp || "")}
            smd={String(arrangement.smd || "")}
          />
        ))}
      </section>
      <section
        id="custom"
        className="grid grid-cols-1 gap-10 bg-pinky px-8 py-20 lg:grid-cols-3 lg:px-36"
      >
        <h1 className="col-span-1 text-center font-semibold text-dark lg:col-span-3">
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
        description="If you're looking for a specific version or performance of the song, add a URL to the message to show me what you're after! If you're looking to purchase an arrangement, please include the song title."
        email="willmclynchmusic@gmail.com"
        phone="021 0724 969"
      />
      <Footer />
    </main>
  );
}
