import React from "react";
import {motion} from "framer-motion";
import {Droplets, Layers, Palette, Printer} from "lucide-react";

const services = [
    {
        title: "Materials",
        description: "All types of traditional woven Cotton and Cotton-stretch fabrics",
        icon: Palette
    },
    {title: "Weaves", description: "Twill, canvas, poplin, voile, herringbone, Bedford cord, and more", icon: Layers},
    {
        title: "Finishes",
        description: "Water Repellent, Wrinkle Free, Teflon Finish, Anti-Bacterial, Soft Mercerized, and more",
        icon: Droplets
    },
    {
        title: "Printing",
        description: "Pigment, Reactive, Disperse, Discharge, Resist, and Burn Out printing",
        icon: Printer
    },
];

const Services = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                        Our Services
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"/>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: idx * 0.1}}
                            className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-red-300 hover:shadow-xl transition-all group"
                        >
                            <div
                                className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-7 h-7 text-white"/>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;