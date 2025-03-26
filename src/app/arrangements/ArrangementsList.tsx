"use client";

import { ArrangementData } from "@/utils/googleSheets";
import { useState } from "react";
import ArrangementBlock from "./ArrangementBlock";

interface ArrangementsListProps {
  arrangements: ArrangementData[];
}

export default function ArrangementsList({
  arrangements,
}: ArrangementsListProps) {
  const [query, setQuery] = useState("");

  const searchFilter = (array: ArrangementData[]): ArrangementData[] => {
    return array.filter((el) =>
      el.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filtered = searchFilter(arrangements);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };
  return (
    <section
      id="arrangements"
      className="flex flex-col items-center gap-10 px-8 pb-20 lg:px-36"
    >
      <div className="flex w-full justify-center">
        <input
          type="text"
          placeholder="Search for an arrangement"
          className="w-full rounded-xl border-none bg-white p-3 text-dark lg:w-1/4"
          value={query}
          onChange={handleChange}
        />
      </div>
      <div className="min-h-96">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          {filtered.length === 0 ? (
            <div className="col-span-2 flex h-fit w-full justify-center lg:col-span-5">
              <p className="text-green">I don&apos;t have that one yet!</p>
            </div>
          ) : (
            filtered.map((arrangement) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
