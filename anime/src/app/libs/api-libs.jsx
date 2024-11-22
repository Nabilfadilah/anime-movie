// fetching api 
export const getAnimeResponse = async(resource, query) => {
    // server component, gak bisa pake useEffect, useState, dll..
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    // keluarkan dulu datanya
    const anime = await response.json()
    return anime
}