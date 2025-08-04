import React from "react";

const VisionMission: React.FC = () => {
    return (
        <section
            className="relative bg-gradient-to-br from-red-50 via-white to-red-100 py-32 px-6 lg:px-20"
        >
            <div className="flex flex-col gap-16 max-w-7xl mx-auto text-black">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-6xl font-bold mb-4">Company Vision &amp; Mission</h2>
                    <div className="flex items-center justify-center space-x-5">
                        <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                        <div className="w-24 h-0.5 bg-red-600"></div>
                    </div>
                </div>

                {/* Vision & Mission grid */}
                <div className="grid lg:grid-cols-2 gap-12 text-lg leading-relaxed">

                    {/* Vision */}
                    <div className="bg-white p-8 shadow-lg rounded-xl">
                        <h3 className="text-3xl font-semibold mb-4">Vision</h3>
                        <p className="mb-4">
                            At the heart of our loom we have the dedication to weaving excellence.
                            We precisely craft fabrics that sing with quality, inspiring designers and
                            makers to unleash their creative spirits. From the touch of luxurious
                            sateen to the strength of resilient canvas, each thread tells a story of
                            care and innovation.
                        </p>
                        <p>
                            Our commitment extends beyond the surface, embracing sustainable practices
                            that minimize our footprint and maximize positive impact. Every yard fabric
                            is a promise to enrich lives, one beautiful textile at a time.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-8 shadow-lg rounded-xl">
                        <h3 className="text-3xl font-semibold mb-4">Mission</h3>
                        <p className="mb-4">
                            We envision a future where fabrics whisper tales of both timeless style
                            and unwavering ecological responsibility. As pioneers in sustainable
                            practices, we aim to become a woven tapestry of innovation, constantly
                            pushing the boundaries of what's possible.
                        </p>
                        <p>
                            We dream of building bridges, connecting passionate communities of artisans
                            and storytellers across the globe. Our textiles will become more than mere
                            materials; they will be vibrant threads, weaving together a brighter future
                            for our planet and the countless lives it shelters.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;