import Typography from "@/elements/button/text/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({api}) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 px-4">
      {api.data?.map((anime, index) => (
        <Link
          key={index}
          href={`/anime/${anime.mal_id}`}
          className="group bg-white rounded-lg shadow-xl shadow-gray-500 overflow-hidden transition-transform transform hover:scale-105"
        >
          {/* Gambar Anime */}
          <Image
            src={anime.images.webp.image_url}
            alt={anime.title}
            width={350}
            height={350}
            className="w-full h-56 object-cover group-hover:brightness-90 transition-all"
          />

          {/* Judul Anime */}
          <div className="p-4 bg-gray-200 text-black">
            <h3 className="font-bold text-lg truncate">{anime.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
