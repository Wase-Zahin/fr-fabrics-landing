import React from "react";

import Aldi from "../assets/customers/Aldi...jpg";
import CnA from "../assets/customers/C&A.jpg";
import Carrefour from "../assets/customers/Carrefour.png";
import Hublot from "../assets/customers/Hublot.jpg";
import Kiabi from "../assets/customers/Kiabi.jpg";
import Kick from "../assets/customers/Kick.jpg";
import LPP from "../assets/customers/LPP.jpg";
import Needles from "../assets/customers/Needles.jpg";
import Next from "../assets/customers/Next.jpg";
import Pepco from "../assets/customers/Pepco.jpg";
import PeterEngland from "../assets/customers/Peter England.jpg";
import PiazzaItalia from "../assets/customers/Piazza Italia.jpg";
import Target from "../assets/customers/Target.jpg";
import TomTailor from "../assets/customers/Tom Tailor.jpg";
import Uniqlo from "../assets/customers/Uniqlo.jpg";
import Wego from "../assets/customers/Wego.jpg";
import Zodio from "../assets/customers/Zodio.jpg";
import Topitop from "../assets/customers/Topitop.jpg";

const customers = [
    {name: "C&A", logo: CnA},
    {name: "Carrefour", logo: Carrefour},
    {name: "Aldi", logo: Aldi},
    {name: "Hublot", logo: Hublot},
    {name: "Kiabi", logo: Kiabi},
    {name: "Kick", logo: Kick},
    {name: "LPP", logo: LPP},
    {name: "Pepco", logo: Pepco},
    {name: "Needles", logo: Needles},
    {name: "Next", logo: Next},
    {name: "Peter England", logo: PeterEngland},
    {name: "Piazza Italia", logo: PiazzaItalia},
    {name: "Target", logo: Target},
    {name: "Tom Tailor", logo: TomTailor},
    {name: "Wego", logo: Wego},
    {name: "Zodio", logo: Zodio},
    {name: "Uniqlo", logo: Uniqlo},
    {name: "Topitop", logo: Topitop},
];

// Split customers into rows: 5-4-5-4
const rows = [
    customers.slice(0, 5),   // Row 1: 5 logos
    customers.slice(5, 9),   // Row 2: 4 logos
    customers.slice(9, 14),  // Row 3: 5 logos
    customers.slice(14, 18), // Row 4: 4 logos
];

const Customers: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-3">
                        Our Customers
                    </h2>
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-2 h-2 bg-red-500 rotate-45"></div>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-red-500 to-red-700"></div>
                    </div>
                </div>

                {/* Logo Grid */}
                <div className="space-y-8">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex flex-wrap justify-center gap-8"
                        >
                            {row.map((customer) => (
                                <div
                                    key={customer.name}
                                    className="group relative flex items-center justify-center p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-300 w-32"
                                >
                                    <img
                                        src={customer.logo}
                                        alt={customer.name}
                                        className="max-h-16 w-auto object-contain transition duration-300 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Customers;