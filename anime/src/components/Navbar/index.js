import InputSeacrh from '@/elements/input/InputSearch'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='bg-color-accent'>
            <div className='flex md:flex-row flex-col justify-between md:items-center p-4 gap-2'>
                <Link href="/" className='font-bold text-white text-2xl'>ANIMEGS</Link>
                <InputSeacrh placeholder="Cari anime..." />
            </div>
        </header>
    )
}

export default Navbar