import Typography from '@/elements/button/text/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AnimeList = ({ id, title, images }) => {
    return (
        <Link href={`/${id}`} className='cursor-pointer'>
            <Image src={images} alt='...' width={350} height={350} className='w-full max-h-64 object-cover' />
            <Typography className="font-bold md:text-xl text-md p-3">{title}</Typography>
        </Link>
    )
}

export default AnimeList