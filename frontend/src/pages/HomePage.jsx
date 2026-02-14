import React from 'react'
import Navbar from '../components/Navbar/Navbar'

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            {/* Main Content */}
            <div
                className={`relative z-10 flex items-center justify-center min-h-screen px-6 text-center transition-opacity duration-700 opacity-100`}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl">
                    Welcome to the GDG-GESCOE!
                </h1>
            </div>
        </div>
    )
}
