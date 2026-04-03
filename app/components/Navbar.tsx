import React from 'react'
import Link from 'next/link'
import { RiNextjsFill } from 'react-icons/ri'


const Navbar = () => {
    return (
        <nav className='fixed top-0 w-full flex items-center justify-around 
        py-5 px-24 border-b border-gray-700 bg-black'>

            <Link href="/" className='transition duration-300
            hover:scale-110'>
                <RiNextjsFill className='w-16 h-16'></RiNextjsFill>
            </Link>

            <ul className='flex gap-10 text-lg'>
                <Link href="/about" className='text-gray-300
                hover:text-white transition-colors'>
                    About
                </Link>
            </ul>

             <ul className='flex gap-10 text-lg'>
                <Link href="/experience" className='text-gray-300
                hover:text-white transition-colors'>
                    Experience
                </Link>
            </ul>

             <ul className='flex gap-10 text-lg'>
                <Link href="/education" className='text-gray-300
                hover:text-white transition-colors'>
                    Education
                </Link>
            </ul>

             <ul className='flex gap-10 text-lg'>
                <Link href="/products" className='text-gray-300
                hover:text-white transition-colors'>
                    Products
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar