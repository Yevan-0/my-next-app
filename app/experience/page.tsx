import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Experience",
    description: "This is the experience page. Conetent coming soon."
}

const pages = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" >
            <div className="space-y-3 max-w-3xl"><h1 className="text-5xl font-semibold">Experience</h1>

                <p className="text-gray-400">This is the experience page. Conetent coming soon.
                </p>
            </div>

        </div>
    )
}

export default pages