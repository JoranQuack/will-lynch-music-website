import TracksBlock from "@/app/tracks/TracksBlock";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconMicrophone2, IconMusicHeart, IconSend } from "@tabler/icons-react";
import { getGoogleSheetsData } from "@/utils/googleSheets";

export default async function LearningTracks() {
  const tracks = await getGoogleSheetsData(
    "Tracks",
    process.env.TRACKS_SPREADSHEET_ID
  );

  return (
    <main className="bg-bluey pt-40">
      <Header textColour="#3E464F" />
      <section id="about" className="flex w-full justify-center pb-20">
        <div className="flex w-1/3 flex-col items-center gap-5 text-center text-dark">
          <h1>
            MY <b>TRACKS</b>
          </h1>
          <p>
            For my birthday one year I was given a microphone and interface and
            it was the coolest thing ever! I immediately started recording
            tracks in my bedroom and have spent the last 4 years honing my
            skills as a vocalist and recording artist to create accurate
            learning tracks as a high-quality learning tool for ensembles around
            the country. I can record in all voicings* as needed! <br />
          </p>
          <p className="text-sm">
            *(with some necessary Melodyne assistance in the bass range).
          </p>

          <a href="#custom" className="round-button bg-dark text-white">
            RECORD FOR ME
          </a>
        </div>
      </section>
      <section id="arrangments" className="grid grid-cols-5 gap-10 px-36 pb-20">
        {tracks.map((track) => (
          <TracksBlock
            title={track.title}
            sampleID={track.sampleID}
            key={track.title}
            arrangedBy={track.arrangedBy}
            parts={track.parts}
            purpose={track.purpose}
            style={track.genreStyle}
            difficulty={track.difficulty}
            inspiredBy={track.inspiredBy}
            tempo={track.tempo}
            voicings={track.voicings}
          />
        ))}
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
            Send me a song you&apos;d like me to record tracks for, or one that
            you are interested in purchasing, I&apos;ll get back to you about
            pricing!
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 text-center text-dark">
          <IconMicrophone2
            size={100}
            stroke={1.5}
            className="h-20 stroke-dark"
          />
          <p>
            I&apos;ll get back to you with a quote and get started recording
            your tracks!
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 text-center text-dark">
          <IconMusicHeart
            size={100}
            stroke={1.5}
            className="h-20 stroke-dark"
          />
          <p>
            Once you have tracks that you&apos;re happy with, I&apos;ll flick
            through an invoice and send you the files! Easy as that!
          </p>
        </div>
      </section>
      <Contact
        title="SEND ME YOUR VISION"
        description="If you're looking for a specific version or performance of the song, add a URL to the message to show me what you're after! If you're looking to purchase learning tracks, please include the song title."
        email="willmclynchmusic@gmail.com"
        phone="021 0724 969"
      />
      <Footer />
    </main>
  );
}
