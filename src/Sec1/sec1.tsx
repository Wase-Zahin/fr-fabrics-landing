import React from "react";
import CloudBG from "../assets/cloud_bg.webp";

const Sec1: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-32 px-6 lg:px-20"
            style={{
                backgroundImage: `url(${CloudBG})`,
            }}
        >
            <div className="flex flex-col gap-10 max-w-7xl mx-auto text-black">
                <div className="mb-10">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-6xl font-bold mb-2">Our Business</h2>
                            <div className="flex items-center space-x-5">
                                <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                                <div className="w-24 h-0.5 bg-red-600"></div>
                            </div>
                        </div>

                        <div className="text-xl leading-relaxed max-w-xl">
                            <p>
                                FR Group started the journey with a trading company named
                                <span className="font-bold">GT SOURCE & SOLUTION</span> (Bangladesh) since 2007. From
                                then GTSSBD
                                doing yarn business in China, India, Pakistan, Indonesia, Malaysia and
                                Vietnam to do export in Bangladesh and Turkey yarn market.
                                In an era of 15 years yarn business we’ve stablished our China
                                company from 2014 and started direct export from China in the name
                                of <span className="font-bold">HANG ZHOU FUYANG BEIWANG TRADING CO. LTD. </span>
                                It becomes one of the pioneer yarn exporters from China and become
                                the second highest exporter in 2020-21 from Fuyang, Hangzhou as per
                                listed company of China government.
                                We’ve started our journey of <span
                                className="font-bold">FR FABRCS LIMITED (FRFL)</span> in Bangladesh
                                dedicated to fabric manufacturing to expand Bangladeshi textile
                                market even further.
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