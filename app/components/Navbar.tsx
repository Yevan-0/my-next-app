import React from 'react'
import Link from 'next/link'
import { RiNextjsFill } from 'react-icons/ri'
import { ThemeToggle } from './ThemeToggle'

const Navbar = () => {
    return (
        <nav className='relative z-10 top-0 w-full flex items-center justify-around 
        py-5 px-24 border-b border-gray-700 
        bg-white dark:bg-black
        text-black dark:text-white'>

            <Link href="/" className='transition duration-300
            hover:scale-110'>
                <RiNextjsFill className='w-16 h-16'></RiNextjsFill>
            </Link>

            <ul className='flex gap-10 text-lg'>
                <Link href="/about" className='text-gray-600 dark:text-gray-300
                hover:text-black  dark:hover:text-white transition-colors'>
                    About
                </Link>
            </ul>

            <ul className='flex gap-10 text-lg'>
                <Link href="/experience" className='text-gray-600 dark:text-gray-300
                hover:text-black  dark:hover:text-white transition-colors'>
                    Experience
                </Link>
            </ul>

            <ul className='flex gap-10 text-lg'>
                <Link href="/education" className='text-gray-600 dark:text-gray-300
                hover:text-black  dark:hover:text-white transition-colors'>
                    Education
                </Link>
            </ul>

            <ul className='flex gap-10 text-lg'>
                <Link href="/products" className='text-gray-600 dark:text-gray-300
                hover:text-black  dark:hover:text-white transition-colors'>
                    Products
                </Link>
            </ul>

            <ThemeToggle />


        </nav>
    )
}

export default Navbar