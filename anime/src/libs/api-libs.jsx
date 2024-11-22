// fetching api
export const getAnimeResponse = async (resource, query) => {
  // server component, gak bisa pake useEffect, useState, dll..
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  // keluarkan dulu datanya
  const anime = await response.json();
  return anime;
};

// double map by recomendasi
export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item[objectProperty]);
};

// random data api refres rekomendasi
export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
