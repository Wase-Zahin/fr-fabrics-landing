import React from "react";

import Aldi from "../assets/customers/Aldi...jpg";
import Aldi1 from "../assets/customers/Aldi...jpg";
import CnA from "../assets/customers/C&A.jpg";
import Carrefour from "../assets/customers/Carrefour.png";
import Essenza from "../assets/customers/Essenza.jpg";
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
    {name: "Aldi", logo: Aldi},
    {name: "Aldi1", logo: Aldi1},
    {name: "C&A", logo: CnA},
    {name: "Carrefour", logo: Carrefour},
    {name: "Essenza", logo: Essenza},
    {name: "Hublot", logo: Hublot},
    {name: "Kiabi", logo: Kiabi},
    {name: "Kick", logo: Kick},
    {name: "LPP", logo: LPP},
    {name: "Needles", logo: Needles},
    {name: "Next", logo: Next},
    {name: "Pepco", logo: Pepco},
    {name: "Peter England", logo: PeterEngland},
    {name: "Piazza Italia", logo: PiazzaItalia},
    {name: "Target", logo: Target},
    {name: "Tom Tailor", logo: TomTailor},
    {name: "Uniqlo", logo: Uniqlo},
    {name: "Wego", logo: Wego},
    {name: "Zodio", logo: Zodio},
    {name: "Topitop", logo: Topitop},
];

const Customers: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Our Customers
                    </h2>
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                        <div className="w-24 h-0.5 bg-red-600"></div>
                    </div>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
                    {customers.map((customer) => (
                        <div
                            key={customer.name}
                            className="group relative flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={customer.logo}
                                alt={customer.name}
                                className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Customers;