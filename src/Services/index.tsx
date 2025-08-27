import React from "react";
import {motion} from "framer-motion";
import {Droplets, Layers, Palette, Printer, Ruler} from "lucide-react";

interface Service {
    title: string;
    description: string;
    icon: React.ElementType;
}

const services: Service[] = [
    {
        title: "Materials",
        description:
            "We produce all types of traditional woven Cotton and Cotton-stretch fabrics with rigid TC, CVC, and Cotton-Poly-Stretch in solid and yarn-dyed, along with AOP in different weave.",
        icon: Palette,
    },
    {
        title: "Weaves",
        description:
            "Twill, canvas, poplin, voile, matt weave, rib-stop, calico, herringbone, Bedford cord, and many others along with dobby as per required shed & optic.",
        icon: Layers,
    },
    {
        title: "Available In",
        description:
            "Solid & Yarn-dyed, Solid Reactive Dye, Vat Dye, Disperse Dye, and Discharge.",
        icon: Ruler,
    },
    {
        title: "Finishes",
        description:
            "Carbon Peach, Water Repellent, Paper-like Stiff, Wrinkle Free, Teflon Finish, Teflon with Wrinkle Free, Anti-Bacterial, Anti-Viral, Soft Mercerized, Brushing, Chintz.",
        icon: Droplets,
    },
    {
        title: "Printing",
        description: "Pigment, Reactive, Disperse, Discharge, Resist, and Burn Out.",
        icon: Printer,
    },
];

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {delay: i * 0.08, duration: 0.5, ease: "easeOut"},
    }),
};

const containerVariants = {
    hidden: {},
    visible: {transition: {staggerChildren: 0.05}},
};

const Services: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-red-50 via-white to-red-100 py-20 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 text-gray-900">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Services <br/> We Provide <br/> An Overview
                    </h2>
                    <div className="flex items-center justify-center space-x-5">
                        <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                        <div className="w-24 h-0.5 bg-red-600"></div>
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            custom={i}
                            variants={itemVariants}
                            className="group relative bg-white border border-red-100 rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-red-200 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div
                                className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-100">
                                <service.icon className="h-6 w-6"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            {/* Decorative underline */}
                            <div
                                className="absolute bottom-0 left-0 right-0 mx-6 mb-3 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"/>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;