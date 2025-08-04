import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import img1 from "../assets/factory/1.jpg";
import img2 from "../assets/factory/2.jpg";
import img3 from "../assets/factory/3.jpg";
import img4 from "../assets/factory/4.jpg";
import img5 from "../assets/factory/5.jpg";
import img6 from "../assets/factory/6.jpg";

const ManufacturingUnit: React.FC = () => {
    const images = [img1, img2, img3, img4, img5, img6];

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <section
            className="relative py-24 px-6 lg:px-20"
            style={{
                backgroundImage: "linear-gradient(to bottom right, #f8fafc, #e2e8f0), url('/bg-texture.png')",
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6">
                    <h2 className="text-5xl font-bold mb-4">Our Manufacturing Unit</h2>
                    <div className="flex items-center space-x-5 mb-6">
                        <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                        <div className="w-24 h-0.5 bg-red-600"></div>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-800">
                        At FR Group, we have a remarkable production capacity of
                        <span className="font-semibold"> 1 Million Yards Woven Fabric</span> per month.
                        Our state-of-the-art facilities and highly skilled workforce enable us
                        to meet and exceed the needs and expectations of our customers.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800">
                        We take pride in being a prominent company in Bangladesh,
                        specializing in the production of <span className="font-semibold">Woven Fabric</span>.
                    </p>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg">
                    <Slider {...sliderSettings}>
                        {images.map((img, idx) => (
                            <div key={idx}>
                                <img
                                    src={img}
                                    alt={`Manufacturing Unit ${idx + 1}`}
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ManufacturingUnit;