import React from 'react'
import Typography from '@/elements/button/text/Typography'
import Link from 'next/link'

const Header = ({title, linkHref, linkTitle}) => {
  return (
    <div>
        <div className="flex justify-between items-center p-4">
            <Typography className="text-2xl font-bold">{title}</Typography>
            {linkHref && linkTitle ? 
                <Link href={linkHref} className="md:text-lg text-md underline hover:text-indigo-500 transition-all">{linkTitle}</Link>
            : null} 
        </div>
    </div>
  )
}

export default Header