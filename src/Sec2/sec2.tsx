import React from "react";
import CloudBG from "../assets/guy.webp";

const Sec2: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-32 px-6 lg:px-20"
            style={{
                backgroundImage: `url(${CloudBG})`,
            }}
        >
            <div className="flex flex-col text-white gap-10 max-w-7xl mx-auto text-black">
                <div className="mb-10">
                    <div className="flex flex-col gap-12 justify-between">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-6xl font-bold mb-2">Welcome Message</h2>
                            <div className="flex items-center space-x-5">
                                <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                                <div className="w-24 h-0.5 bg-red-600"></div>
                            </div>
                        </div>

                        <div className="text-xl leading-relaxed max-w-xl">
                            <p>
                                In 2018, <span className="font-bold">GTSSBD</span> (Bangladesh) decided to establish a
                                fabric
                                manufacturing unit and started production of woven fabrics in Bangladesh by forming its
                                own company
                                named <span className="font-bold">FR FABRICS LIMITED (FRFL)</span>.
                            </p>
                            <p>
                                <span className="font-bold">FR FABRICS LIMITED (FRFL)</span> produced all kinds of woven
                                fabrics as
                                per the standards of the European and USA market’s solid dyeing requirements in its own
                                weaving unit.
                                In 2023, FR FABRICS LIMITED (FRFL) was formally incorporated as a limited company.
                            </p>
                            <p>
                                FRFL produces innovative woven fabrics using high-tech machinery and equipment. With
                                on-time production,
                                a strong focus on quality, uniqueness in diversification, and honesty at every step, we
                                are committed to
                                maximizing customer satisfaction.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec2;