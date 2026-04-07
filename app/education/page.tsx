import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Education",
    description:"Education coming soon."
}

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" >
            <div className="space-y-3 max-w-3xl"><h1 className="text-5xl font-semibold">Education</h1>

                <p className="text-gray-400">Education coming soon.
                </p>
            </div>

        </div>
    )
}

export default page