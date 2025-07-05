import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import TADlogo from "../assets/tad-grpoup-logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 w-full z-10 text-white">
            <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

            <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between z-10">
                <div className="flex items-center space-x-3">
                    <img src={TADlogo} alt="GTT Logo" className="h-12 w-auto"/>
                </div>

                {/* Desktop Menu */}
                <div
                    className="hidden font-semibold text-white md:flex items-center space-x-10">
                    <button className="cursor-pointer transition-colors duration-300 hover:text-red-700">
                        HOME
                    </button>
                    <button className="cursor-pointer transition-colors duration-300 hover:text-red-700">OUR
                        BUSINESS
                    </button>
                    <button
                        className="cursor-pointer transition-colors duration-300 hover:text-red-700">CONTACT
                        US
                    </button>
                    <button
                        className="cursor-pointer transition-colors duration-300 hover:text-red-700">BLOG
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition">
                        Get Our Profile
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4 bg-blue-600 z-10 relative">
                    <button className="bg-red-600 hover:bg-red-700 w-full text-white py-2 rounded-lg transition">
                        Get a FREE Quote
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;