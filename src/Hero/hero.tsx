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
            <div className="relative z-10 text-white text-left max-w-3xl px-6">
                <h1
                    className="text-5xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0F6155] to-white bg-clip-text text-transparent drop-shadow-lg"
                >
                    FR FABRICS LIMITED (FRFL)
                </h1>
                <p className="text-xl text-gray-200">
                    FR FABRICS LIMITED (FRFL) produces all kinds of woven fabric as per
                    European and USA market standards.
                </p>
            </div>
        </section>
    );
};

export default Hero;