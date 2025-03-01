import ArrangementBlock from "@/components/ArrangementBlock";
import Header from "@/components/Header";

export default function Arrangements() {
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
          <a href="#contact" className="round-button bg-green text-white">
            ARRANGE FOR ME
          </a>
        </div>
      </section>
      <section id="arrangments" className="grid grid-cols-5 gap-10 px-36">
        <ArrangementBlock
          title="Everybody Wants to Rule the World"
          src="https://drive.google.com/thumbnail?id=1_GQsSyVDuCrVzh3_pDJyPHtOndCbq_pu&sz=w500"
          href=""
        />
        <ArrangementBlock
          title="Everybody Wants to Rule the World"
          src="https://drive.google.com/thumbnail?id=1_GQsSyVDuCrVzh3_pDJyPHtOndCbq_pu&sz=w500"
          href=""
        />
        <ArrangementBlock
          title="Everybody Wants to Rule the World"
          src="https://drive.google.com/thumbnail?id=1_GQsSyVDuCrVzh3_pDJyPHtOndCbq_pu&sz=w500"
          href=""
        />
        <ArrangementBlock
          title="Everybody Wants to Rule the World"
          src="https://drive.google.com/thumbnail?id=1_GQsSyVDuCrVzh3_pDJyPHtOndCbq_pu&sz=w500"
          href=""
        />
        <ArrangementBlock
          title="Everybody Wants to Rule the World"
          src="https://drive.google.com/thumbnail?id=1_GQsSyVDuCrVzh3_pDJyPHtOndCbq_pu&sz=w500"
          href=""
        />
      </section>
    </main>
  );
}
