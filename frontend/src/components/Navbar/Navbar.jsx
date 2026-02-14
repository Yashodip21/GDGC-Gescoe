import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = () => {
    return (
        <nav>
            <div className="hidden md:block">
                <DesktopNav />
            </div>
            <div className="block md:hidden">
                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar