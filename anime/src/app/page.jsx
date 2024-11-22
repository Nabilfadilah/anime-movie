import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recomAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  // Acak data menggunakan Fisher-Yates Shuffle
  // Math.random() menghasilkan angka antara 0 dan 1.
  // sort(() => Math.random() - 0.5) mengacak elemen dalam array dengan probabilitas yang seragam.
  // recomAnime = recomAnime.sort(() => Math.random() - 0.5);
  // Ambil hanya 8 data rekomendasi
  // recomAnime = { data: recomAnime.slice(0, 8) };

  // opsi-2 acak data rekomendasi anime
  recomAnime = reproduce(recomAnime, 8);

  return (
    <>
      {/* anime populer */}
      <section>
        {/* anime list punya data api dari topAnime */}
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
        <div className="px-4 py-4">
          <hr className="text-color-primary" />
        </div>
      </section>

      {/* Paling populer */}
      <section>
        {/* anime list punya data api dari topAnime */}
        <Header
          title="Paling Rekomendasi"
          linkTitle="Lihat Semua"
          // linkHref="/populer"
        />
        <AnimeList api={recomAnime} />
      </section>
    </>
  );
};

export default Page;
