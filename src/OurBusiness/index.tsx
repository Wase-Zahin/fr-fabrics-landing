import React from "react";
import logo1 from "../assets/ourlogos/WhatsApp Image 2026-04-15 at 1.10.38 PM.jpeg";
import logo2 from "../assets/ourlogos/WhatsApp Image 2026-04-15 at 1.10.27 PM.jpeg";
import logo3 from "../assets/ourlogos/WhatsApp Image 2026-04-15 at 1.11.23 PM.jpeg";
import logo4 from "../assets/ourlogos/WhatsApp Image 2026-04-15 at 1.13.35 PM.jpeg";

const OurBusiness: React.FC = () => {
    return (
        <section className="relative py-24 lg:py-32 px-6 lg:px-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95"/>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                        Our Business
                    </h2>
                    <div className="flex items-center space-x-5 mb-10">
                        <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                        <div className="w-32 h-0.5 bg-gradient-to-r from-red-500 to-red-700"></div>
                    </div>
                    <div
                        className="text-lg leading-relaxed bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl max-w-4xl">
                        <p className="mb-5 text-gray-200">
                            FR Group began its journey in 2007 with{" "}
                            <span className="font-bold text-red-400">
                                GT SOURCE & SOLUTION (GTSSBD)
                            </span>{" "}
                            in Bangladesh, trading yarns across China, India, Pakistan,
                            Indonesia, Malaysia, and Vietnam.
                        </p>
                        <p className="mb-5 text-gray-200">
                            In 2014, we established{" "}
                            <span className="font-bold text-red-400">
                                HANG ZHOU FUYANG BEIWANG TRADING CO. LTD.
                            </span>{" "}
                            in China, which became one of the top yarn exporters from Hangzhou.
                        </p>
                        <p className="text-gray-200">
                            Building on this,{" "}
                            <span className="font-bold text-red-400">FR FABRICS LIMITED (FRFL)</span> was
                            launched in Bangladesh, dedicated to fabric manufacturing and
                            expanding the textile market.
                        </p>
                    </div>
                </div>

                {/* Logos */}
                <div className="flex flex-row items-center justify-start gap-8">
                    {[logo1, logo2, logo3, logo4].map((logo, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-300 flex items-center justify-center"
                        >
                            <img
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                style={{width: 140, height: 70, objectFit: "contain"}}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurBusiness;