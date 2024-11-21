import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header";

const Page = async () => {

  {/* server component, gak bisa pake useEffect, useState, dll.. */ }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)

  // keluarkan dulu datanya
  const topAnime = await response.json()
  // console.log('Ini data api anime : ', anime);

  return (
    <>
      {/* anime populer */}
      <section>
        {/* anime list punya data api dari topAnime */}
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
}

export default Page;
