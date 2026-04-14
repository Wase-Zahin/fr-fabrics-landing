import React from "react";

import poplin_fabric from "../assets/products/poplin_fabric.png";
import voile_fabric from "../assets/products/voile_fabric.png";
import herringbone_fabric from "../assets/products/herringbone_fabric.png";
import rib_stop_fabric from "../assets/products/rib-stop_fabric.png";
import bedford_cord_fabric from "../assets/products/bedford_cord_fabric.png";
import dobby_fabric from "../assets/products/dobby_fabric.png";
import linen_fabric from "../assets/products/linen_fabric.png";
import hemp_fabric from "../assets/products/hemp_fabric.png";
import oxford_fabric from "../assets/products/oxford_fabric.png";
import panama_fabric from "../assets/products/panama_fabric.png";
import chintz_fabric from "../assets/products/chintz_fabric.png";
import anti_bacterial_fabric from "../assets/products/anti-bacterial_fabric.png";
import denim_fabric from "../assets/products/denim_fabric.png";
import slub_denim_fabric from "../assets/products/slub_denim_fabric.png";
import disperse_fabric from "../assets/products/disperse_fabric.png";
import two_tone_fabric from "../assets/products/two_tone_fabric.png";
import digital_print_fabric from "../assets/products/digital_print_fabric.png";
import pigment_print_fabric from "../assets/products/pigment_print_fabric.png";
import teflon_coated_fabric from "../assets/products/teflon_coated_fabric.png";
import wrinkle_free_fabric from "../assets/products/wrinkle_free_fabric.png";
import water_repellent_fabric from "../assets/products/water_repellent_fabric.png";
import paper_like_stiff_fabric from "../assets/products/paper_like_stiff_fabric.png";
import brushing_fabric from "../assets/products/brushing_fabric.png";
import grindle_fabric from "../assets/products/grindle_fabric.png";
import twtwill from "../assets/products/tw_twill_fabric.jpg";


const products = [
    {name: "Poplin Fabric", img: poplin_fabric},
    {name: "Voile Fabric", img: voile_fabric},
    {name: "Herringbone Fabric", img: herringbone_fabric},
    {name: "Rib-Stop Fabric", img: rib_stop_fabric},
    {name: "Bedford Cord Fabric", img: bedford_cord_fabric},
    {name: "Dobby Fabric", img: dobby_fabric},
    {name: "Linen Fabric", img: linen_fabric},
    {name: "Hemp Fabric", img: hemp_fabric},
    {name: "Oxford Fabric", img: oxford_fabric},
    {name: "Panama Fabric", img: panama_fabric},
    {name: "Chintz Fabric", img: chintz_fabric},
    {name: "Anti-Bacterial Fabric", img: anti_bacterial_fabric},
    {name: "Denim Fabric", img: denim_fabric},
    {name: "Slub Denim Fabric", img: slub_denim_fabric},
    {name: "Disperse Fabric", img: disperse_fabric},
    {name: "Two Tone Fabric", img: two_tone_fabric},
    {name: "Digital Print Fabric", img: digital_print_fabric},
    {name: "Pigment Print Fabric", img: pigment_print_fabric},
    {name: "Teflon Coated Fabric", img: teflon_coated_fabric},
    {name: "Wrinkle Free Fabric", img: wrinkle_free_fabric},
    {name: "Water Repellent Fabric", img: water_repellent_fabric},
    {name: "Paper-Like Stiff Fabric", img: paper_like_stiff_fabric},
    {name: "Brushing Fabric", img: brushing_fabric},
    {name: "Grindle Fabric", img: grindle_fabric},
    {name: "TC Twill Fabric", img: twtwill},
];

const Products: React.FC = () => {
    return (
        <section className="py-12 mt-32 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                Our Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {products.map((product) => (
                    <div
                        key={product.name}
                        className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
                    >
                        <img
                            src={product.img}
                            alt={product.name}
                            className="h-32 w-full object-cover"
                        />
                        <div className="p-3 text-center">
                            <h3 className="text-sm font-semibold text-gray-700">
                                {product.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;