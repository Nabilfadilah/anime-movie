// import React from 'react'

// const page = async ({ params }) => {

//     // Ambil dan pastikan `params` sudah di-resolve
//     const { keyword } = await params;

//     return (
//         <div>
//             <h2>Pencarian untuk : {keyword}</h2>
//             <h1>SEARCH PAGE</h1>
//         </div>
//     )
// }

// export default page

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  // menangkap url dan diasumsikan url itu variabelnya keyword
  // const { keyword } = params
  const { keyword } = params;

  // Decode keyword
  const decodedKeyword = decodeURIComponent(keyword);
  console.log("Decoded:", decodedKeyword);

  {
    /* server component, gak bisa pake useEffect, useState, dll.. */
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  );

  // keluarkan dulu datanya
  const searchAnime = await response.json();
  // console.log('Ini data api anime : ', anime);

  return (
    <>
      {/* anime populer */}
      <section>
        {/* anime list punya data api dari searchAnime */}
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
