import React from 'react'
import { Metadata } from 'next';
import Image from 'next/image';


export const metadata: Metadata = {
    title: "Experience",
    description: "This is the experience page. Conetent coming soon."
}




const Page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" >
            <div className="space-y-3 max-w-3xl"><h1 className="text-5xl font-semibold">Experience</h1>

                <p className="text-gray-400">This is the experience page. Conetent coming soon.</p>

                {/* <Image
                    alt='Next.js logo'
                    src="htps://assets.vercel.com/image/upload.v166454638/nextjs-docs/component-level-data-fetching.png"
                    width={1200}
                    height={550}
                    style={{
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                /> */}

            </div>

        </div>
    )
}

export default Page