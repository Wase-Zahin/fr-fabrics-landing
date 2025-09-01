import Yarn from "../assets/weaving.jpg";

const Hero = () => {
    return (
        <section className="relative h-[85vh] flex items-center justify-center text-center">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${Yarn})`}}
            >
                <div className="absolute inset-0 bg-black/60"/>
            </div>

            {/* Content */}
            <div className="relative z-10 text-white max-w-3xl px-6">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                    Our Business Focus On
                </h1>
                <p className="text-xl text-gray-200">
                    Delivering excellence in fabrics, yarns, and global sourcing with
                    innovation and trust.
                </p>
            </div>
        </section>
    );
};

export default Hero;