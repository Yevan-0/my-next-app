import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About",
    description: "Hi, I'm Yevan — a Frontend Software Engineer Intern at IMI Games with a passion for building clean," +
        "responsive user interfaces. I enjoy turning ideas into real, interactive experiences on the web."
}

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" >
            <div className="space-y-3 max-w-3xl"><h1 className="text-5xl font-semibold">About Page</h1>

                <p className="text-gray-400">Hi, I'm Yevan — a Frontend Software Engineer Intern at IMI Games with a passion for building clean,
                    responsive user interfaces. I enjoy turning ideas into real, interactive experiences on the web.</p>

                <h3 className='text-2xl font-semibold'>Skills and Technologies</h3>
                <ul className='list-disc list-inside'>
                    <li className='text-2 font-semibold'>React</li>
                    <li className='text-2 font-semibold'>JavaScript</li>
                    <li className='text-2 font-semibold'>Python</li>
                    <li className='text-2 font-semibold'>Nextjs <span className='font-light'>(Currently Learning)</span></li>
                </ul>
            </div>

        </div>
    )
}

export default page