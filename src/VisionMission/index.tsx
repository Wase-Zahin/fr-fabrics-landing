import React from "react";

const VisionMission = () => {
    return (
        <section
            className="py-24 px-6 bg-gradient-to-b from-slate-800 via-slate-100 to-white text-slate-900 transition-colors duration-700">
            <div className="max-w-6xl mx-auto text-center">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Worldwide Impact</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-red-600 to-slate-700 bg-clip-text text-transparent">
                    Global Presence
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full mb-12"/>
                <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                    Serving customers across continents with premium quality fabrics and
                    reliable partnerships built on trust and innovation.
                </p>
            </div>
        </section>
    );
};

export default VisionMission;