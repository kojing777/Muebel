import React from "react";
import { PiHeart } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { TbShoppingCart } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Contact', path: '/' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "bg-[#fbebb5] text-gray-800 py-4 md:py-6"}`}>

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
                <img 
                    src={"https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg"} 
                    alt="logo" 
                    className={`h-9 ${isScrolled ? "invert opacity-80" : "invert-0 opacity-100"}`} 
                />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-gray-800"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-gray-800"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
                <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-gray-800'} transition-all`}>
                    New Launch
                </button>
            </div>

            {/* Desktop Right - Updated with new icons */}
            <div className="hidden md:flex items-center gap-6">
                <button className={`p-2 rounded-full ${isScrolled ? "text-gray-700" : "text-gray-800"}`}>
                    <FiSearch className="h-5 w-5" />
                </button>
                <button className={`p-2 rounded-full ${isScrolled ? "text-gray-700" : "text-gray-800"}`}>
                    <PiHeart className="h-5 w-5" />
                </button>
                <button className={`p-2 rounded-full ${isScrolled ? "text-gray-700" : "text-gray-800"}`}>
                    <TbShoppingCart className="h-5 w-5" />
                </button>
                <button className={`p-2 rounded-full ${isScrolled ? "text-gray-700" : "text-gray-800"}`}>
                    <CgProfile className="h-5 w-5" />
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : "text-gray-800"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}

                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    New Launch
                </button>

                <div className="flex items-center gap-6">
                    <button className="p-2 rounded-full text-gray-800">
                        <FiSearch className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full text-gray-800">
                        <PiHeart className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full text-gray-800">
                        <TbShoppingCart className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full text-gray-800">
                        <CgProfile className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;