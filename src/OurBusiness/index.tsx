import React from "react";
import BG from "../assets/svitlana-HbiRi1Owk9k-unsplash.jpg";

const OurBusiness: React.FC = () => {
    return (
        <section className="relative py-24 lg:py-32 px-6 lg:px-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={BG}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/70"/>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-5xl lg:text-6xl font-bold mb-4">Our Business</h2>
                    <div className="flex items-center space-x-5 mb-8">
                        <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                        <div className="w-24 h-0.5 bg-red-600"></div>
                    </div>
                    <div className="text-lg leading-relaxed bg-white p-6 rounded-xl shadow-lg max-w-3xl">
                        <p className="mb-4">
                            FR Group began its journey in 2007 with{" "}
                            <span className="font-bold">
                GT SOURCE & SOLUTION (GTSSBD)
              </span>{" "}
                            in Bangladesh, trading yarns across China, India, Pakistan,
                            Indonesia, Malaysia, and Vietnam.
                        </p>
                        <p className="mb-4">
                            In 2014, we established{" "}
                            <span className="font-bold">
                HANG ZHOU FUYANG BEIWANG TRADING CO. LTD.
              </span>{" "}
                            in China, which became one of the top yarn exporters from Hangzhou.
                        </p>
                        <p>
                            Building on this,{" "}
                            <span className="font-bold">FR FABRICS LIMITED (FRFL)</span> was
                            launched in Bangladesh, dedicated to fabric manufacturing and
                            expanding the textile market.
                        </p>
                    </div>
                </div>

                {/* Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        "TEXWEAVE",
                        "TAD SOURCING",
                        "TAD LOGISTIC",
                        "TAD ENGINEERING",
                        "TAD AVIATION",
                        "TAD AUTOS",
                        "MAYC'S",
                        "KOI THÉ",
                        "KLOTHEN",
                    ].map((name, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-xl shadow flex items-center justify-center"
                        >
                            <img
                                src={`https://via.placeholder.com/150x60?text=${encodeURIComponent(
                                    name
                                )}`}
                                alt={name}
                                className="object-contain max-h-10"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurBusiness;