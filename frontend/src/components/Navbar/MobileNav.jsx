import React, { useState } from 'react'
import mainLogo from '../../assets/gdg-gescoe-logos/short-dark-.png'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const navItems = [
        { label: 'Home', href: '#home', isReady: true },
        { label: 'About', isReady: false },
        { label: 'Events', isReady: false },
        { label: 'Team', isReady: false },
        { label: 'Blogs', isReady: false },
        { label: 'Contact', isReady: false },
    ]

    return (
        <>
            {/* Sticky Mobile Header */}
            <div className="sticky top-0 z-50 md:hidden">
                <div className="backdrop-blur-lg backdrop-saturate-150 bg-background/80 border-b border-white/10 shadow-lg shadow-black/5">
                    <div className="px-4">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex items-center gap-2.5 cursor-pointer group">
                                <img
                                    src={mainLogo}
                                    alt="GDG GESCOE Logo"
                                    className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(66,133,244,0.5)]"
                                />
                            </div>

                            {/* Hamburger Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none transition-all duration-300"
                                aria-label="Toggle menu"
                            >
                                <span
                                    className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                                />
                                <span
                                    className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
                                />
                                <span
                                    className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ backgroundColor: 'var(--color-background)' }}
            >
                {/* Header inside drawer */}
                <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5 cursor-pointer group">
                        <img
                            src={mainLogo}
                            alt="GDG GESCOE Logo"
                            className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(66,133,244,0.5)]"
                        />
                    </div>
                    <button
                        onClick={closeMenu}
                        className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none transition-all duration-300"
                        aria-label="Close menu"
                    >
                        <span className="block w-6 h-0.5 bg-foreground rotate-45 translate-y-0" />
                        <span className="block w-6 h-0.5 bg-foreground -rotate-45 -translate-y-0.5" />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col pt-2">
                    {navItems.map((item, index) => (
                        <div key={item.label}>
                            {item.isReady ? (
                                <a
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="block px-6 py-5 text-foreground hover:text-primary transition-colors duration-200 font-semibold text-base"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <button
                                    type="button"
                                    onClick={closeMenu}
                                    className="block w-full text-left px-6 py-5 text-foreground/60 cursor-default font-semibold text-base"
                                    disabled
                                >
                                    {item.label}
                                </button>
                            )}
                            {index < navItems.length - 1 && (
                                <div className="border-b border-white/10 mx-6" />
                            )}
                        </div>
                    ))}

                    {/* Join Us Button */}
                    <div className="px-6 pt-4 pb-6">
                        <button
                            onClick={closeMenu}
                            className="w-full px-6 py-4 text-base font-semibold text-white rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(66,133,244,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                        >
                            Join Us
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default MobileNav