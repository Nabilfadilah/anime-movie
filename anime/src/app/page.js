import AnimeList from "@/components/AnimeList"
import Typography from "../elements/button/text/Typography";
import Link from "next/link";

const Home = async () => {

  {/* server component, gak bisa pake useEffect, useState, dll.. */ }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)

  // keluarkan dulu datanya
  const anime = await response.json()
  // console.log('Ini data api anime : ', anime);

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
      <div className="flex justify-between items-center p-4">
        <Typography className="text-2xl font-bold">Paling Popular</Typography>
        <Link href="/populer" className="md:text-lg text-md underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList id={data.mal_id} title={data.title} images={data.images.webp.image_url} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
