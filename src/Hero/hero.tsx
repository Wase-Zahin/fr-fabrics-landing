import Yarn from "../assets/weaving.jpg";

const Hero = () => {
    return (
        <section className="relative py-16 px-6 lg:px-20">
            {/* Background layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${Yarn})`,
                    filter: "brightness(50%)",
                    zIndex: 0,
                }}
            />

            {/* Content layer */}
            <div className="relative max-w-7xl mx-auto text-white z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    <div className="flex flex-col justify-end pt-44">
                        <h2 className="text-4xl font-bold mb-2 pt-16 pl-20">OUR BUSINESS FOCUS ON</h2>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {Array.from({length: 9}).map((_, idx) => (
                            <div
                                key={idx}
                                className="bg-transparent p-4 rounded flex items-center justify-center"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;