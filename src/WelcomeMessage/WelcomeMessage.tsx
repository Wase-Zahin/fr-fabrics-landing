import React from "react";

const WelcomeMessage = () => {
    return (
        <section className="relative py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
            {/* Optional background texture blur */}
            <div
                className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"/>

            <div className="relative max-w-6xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-16 text-white">
                    <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Our Story</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                        Building Excellence Since 2018
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-400 mx-auto rounded-full"/>
                </div>

                {/* Glassy Card */}
                <div
                    className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
                    <div className="prose prose-lg max-w-none text-slate-200">
                        <p className="text-lg leading-relaxed mb-6">
                            In 2018, <span className="font-bold text-white">GTSSBD</span> expanded into fabric
                            manufacturing, creating{" "}
                            <span className="font-bold text-red-400">FR FABRICS LIMITED (FRFL)</span>.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            FRFL produces woven fabrics for European and US markets, meeting the highest quality
                            standards. In 2023, it was formally incorporated as a limited company.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Today, FRFL continues with innovation, punctual delivery, and customer-first values,
                            maximizing satisfaction worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeMessage;