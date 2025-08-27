import React from "react";
import BG from "../assets/svitlana-HbiRi1Owk9k-unsplash.jpg";

const Sec1: React.FC = () => {
    return (
        <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
            {/* Background image with dark overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={BG}
                    alt="Background"
                    className="w-full h-full object-cover brightness-75"
                />
            </div>

            {/* Content on top */}
            <div className="relative z-10 flex flex-col gap-10 max-w-7xl mx-auto text-black">
                <div className="mb-10">
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-6xl font-bold mb-2">Our Business</h2>
                            <div className="flex items-center space-x-5">
                                <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                                <div className="w-24 h-0.5 bg-red-600"></div>
                            </div>
                        </div>

                        <div className="text-xl leading-relaxed max-w-xl bg-white/40 p-4 rounded shadow">
                            <p>
                                FR Group began its journey in 2007 with a trading company named
                                <span className="font-bold"> GT SOURCE & SOLUTION (GTSSBD)</span> in Bangladesh.
                                Since then, GTSSBD has been involved in the yarn business across China, India, Pakistan,
                                Indonesia, Malaysia, and Vietnam, focusing on exporting to the Bangladesh and Turkey
                                yarn markets.
                            </p>
                            <p>
                                Over 15 years in the yarn business, we established our China-based company in 2014 and
                                started direct exports from China under the name
                                <span className="font-bold"> HANG ZHOU FUYANG BEIWANG TRADING CO. LTD.</span>
                                It became one of the pioneer yarn exporters from China and was ranked as the
                                second-highest exporter in 2020-21 from Fuyang, Hangzhou, as per the listings
                                of the Chinese government.
                            </p>
                            <p>
                                Building on this success, we started our new venture,
                                <span className="font-bold"> FR FABRICS LIMITED (FRFL)</span> in Bangladesh,
                                dedicated to fabric manufacturing with the goal of further expanding the
                                Bangladeshi textile market.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-1 gap-8">
                    <div className="grid grid-cols-3 gap-4">
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
                                className="bg-white p-4 shadow rounded flex items-center justify-center"
                            >
                                <img
                                    src={`https://via.placeholder.com/150x60?text=${encodeURIComponent(
                                        name
                                    )}`}
                                    alt={name}
                                    className="object-contain max-h-12"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec1;