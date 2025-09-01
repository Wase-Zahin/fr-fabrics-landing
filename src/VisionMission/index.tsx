import React from "react";
import BG from "../assets/ethan-bodnar-kgC99X3WH1w-unsplash.jpg";

const VisionMission: React.FC = () => {
    return (
        <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={BG}
                    alt="Background"
                    className="w-full h-full object-cover brightness-75"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto text-white">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold">Company Vision &amp; Mission</h2>
                    <div className="flex items-center justify-center space-x-5 mt-4">
                        <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                        <div className="w-24 h-0.5 bg-red-600"></div>
                    </div>
                </div>

                {/* Vision + Mission */}
                <div className="grid lg:grid-cols-2 gap-12 text-lg leading-relaxed">
                    <div className="bg-white/90 backdrop-blur-md p-8 shadow-xl rounded-2xl text-gray-900">
                        <h3 className="text-3xl font-semibold mb-4">Vision</h3>
                        <p className="mb-4">
                            At the heart of our loom we have the dedication to weaving excellence.
                            We precisely craft fabrics that sing with quality, inspiring designers
                            and makers to unleash their creative spirits.
                        </p>
                        <p>
                            Our commitment extends beyond the surface, embracing sustainable
                            practices that minimize our footprint and maximize positive impact.
                        </p>
                    </div>

                    <div className="bg-white/90 backdrop-blur-md p-8 shadow-xl rounded-2xl text-gray-900">
                        <h3 className="text-3xl font-semibold mb-4">Mission</h3>
                        <p className="mb-4">
                            We envision a future where fabrics whisper tales of timeless style
                            and ecological responsibility. As pioneers in sustainability, we
                            push the boundaries of what’s possible.
                        </p>
                        <p>
                            We dream of connecting communities of artisans and storytellers
                            worldwide, weaving together a brighter future for our planet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;