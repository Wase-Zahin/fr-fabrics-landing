import React from "react";
import BG from "../assets/lidya-nada-grQh_x_vZKM-unsplash.jpg";

const WelcomeMessage: React.FC = () => {
    return (
        <section className="relative py-24 lg:py-32 px-6 lg:px-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src={BG} alt="Background" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/60"/>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-white">
                <h2 className="text-5xl lg:text-6xl font-bold mb-6">Welcome Message</h2>
                <div className="flex items-center space-x-5 mb-8">
                    <div className="w-2 h-2 bg-red-500 rotate-45"></div>
                    <div className="w-24 h-0.5 bg-red-500"></div>
                </div>
                <div className="text-lg leading-relaxed bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur">
                    <p className="mb-4">
                        In 2018, <span className="font-bold">GTSSBD</span> expanded into
                        fabric manufacturing, creating{" "}
                        <span className="font-bold">FR FABRICS LIMITED (FRFL)</span>.
                    </p>
                    <p className="mb-4">
                        FRFL produces woven fabrics for European and US markets, meeting the
                        highest quality standards. In 2023, it was formally incorporated as
                        a limited company.
                    </p>
                    <p>
                        Today, FRFL continues with innovation, punctual delivery, and
                        customer-first values, maximizing satisfaction worldwide.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WelcomeMessage;