import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="flex items-center justify-center col-start-2">
      <h4 className='text-sm font-normal'> Built by <Link href="https://github.com/polatechno" target='_blank'>@polatechno</Link> using Next.js </h4>
    </footer>
  )
}

export default Footer