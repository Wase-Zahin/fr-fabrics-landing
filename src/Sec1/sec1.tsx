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

                        <div className="text-2xl leading-relaxed max-w-xl">
                            <p>
                                It became the parent of TEXWEAVE, TAD SOURCING LTD. TAD LOGISTIC LTD., TAD ENGINEERING,
                                TAD
                                AUTOS, TAD AVIATION, MAYE’S, REPLICA CREATIONS LTD., KLOTHEN and KOI THE BANGLADESH LTD.
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