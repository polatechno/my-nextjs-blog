import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        //
        <header className="flex items-center justify-between col-start-2">
            <Link href="/" className='text-white text-2xl font-bold'>
                <span>BLOG</span>
            </Link>
            <nav>
                <Link href="https://github.com/polatechno" target='_blank'>
                    About
                </Link>
            </nav>
        </header>
    )
}

export default Header