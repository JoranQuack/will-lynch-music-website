"use client";

import { TrackData } from "@/utils/googleSheets";
import { useState } from "react";
import TracksBlock from "./TracksBlock";

interface TracksListProps {
  tracks: TrackData[];
}

export default function TracksList({ tracks }: TracksListProps) {
  const [query, setQuery] = useState("");

  const searchFilter = (array: TrackData[]): TrackData[] => {
    return array.filter((el) =>
      el.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filtered = searchFilter(tracks);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };
  return (
    <section
      id="tracks"
      className="flex flex-col items-center gap-10 px-8 pb-20 lg:px-36"
    >
      <div className="flex w-full justify-center">
        <input
          type="text"
          placeholder="Search for a learning track"
          className="w-full rounded-xl border-none bg-white p-3 text-dark lg:w-1/4"
          value={query}
          onChange={handleChange}
        />
      </div>
      <div className="min-h-96">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-2 flex h-fit w-full justify-center lg:col-span-5">
              <p className="text-dark">I don&apos;t have that one yet!</p>
            </div>
          ) : (
            filtered.map((track) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
