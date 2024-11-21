"use client"

import { LuFileSearch } from "react-icons/lu";
import Link from "next/link";
import Typography from "@/elements/button/text/Typography";

const Page = () => {
  return (
    <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
        <div className="flex justify-center items-center gap-4 flex-col">
            <LuFileSearch size={44} className="text-color-accent" />
            <Typography className="text-color-accent text-4xl font-bold">NOT FOUND</Typography>
            <Link href="/" className="text-color-primary hover:text-color-accent transition-all underline">Kembali</Link>
        </div>
    </div>
  )
}

export default Page