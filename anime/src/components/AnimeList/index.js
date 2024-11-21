import Typography from '@/elements/button/text/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data.map(anime => {
                return (
                    <Link
                        key={anime.mal_id}
                        href={`/${anime.mal_id}`}
                        className='cursor-pointer text-color-primary hover:text-color-accent transition-all'
                    >
                        <Image
                            src={anime.images.webp.image_url}
                            alt='...'
                            width={350}
                            height={350}
                            className='w-full max-h-64 object-cover rounded-lg'
                        />
                        <Typography className="font-bold md:text-xl text-md p-3">{anime.title}</Typography>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList