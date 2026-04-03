import React from 'react'

const pages = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" >
            <div className="space-y-3 max-w-3xl"><h1 className="text-5xl font-semibold">Products</h1>

                <p className="text-gray-400">Type a string in the url to test the change in dynamic routing
                    (e.g. http://localhost:3000/products/computer)
                </p>
            </div>

        </div>
    )
}

export default pages