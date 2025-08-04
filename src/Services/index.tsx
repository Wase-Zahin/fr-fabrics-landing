import React from "react";

const Services: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-red-50 via-white to-red-100 py-24 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 text-black">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-5xl font-bold mb-4">
                        Services <br/> We Provide <br/> An Overview
                    </h2>
                    <div className="flex items-center justify-center space-x-5">
                        <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                        <div className="w-24 h-0.5 bg-red-600"></div>
                    </div>
                </div>

                {/* Services grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg leading-relaxed">

                    {/* Materials */}
                    <div className="bg-white p-8 shadow-lg rounded-xl">
                        <h3 className="text-2xl font-semibold mb-4">Materials</h3>
                        <p>
                            We can produce all types of traditional woven Cotton and Cotton-stretch fabric
                            with rigid TC, CVC and Cotton-Poly-Stretch in solid and yarn dyed along with AOP
                            in different weave.
                        </p>
                    </div>

                    {/* Weaves */}
                    <div className="bg-white p-8 shadow-lg rounded-xl">
                        <h3 className="text-2xl font-semibold mb-4">Weaves</h3>
                        <p>
                            Twill, canvas, poplin, voile, matt weave, rib-stop, calico, herringbone, Bedford cord
                            and many others along with dobby as per required shed & optic.
                        </p>
                    </div>

                    {/* Available In */}
                    <div className="bg-white p-8 shadow-lg rounded-xl">
                        <h3 className="text-2xl font-semibold mb-4">Available In</h3>
                        <p>
                            Solid & Yarn-dyed, Solid Reactive Dye, Vat Dye, Disperse Dye and Discharge.
                        </p>
                    </div>

                    {/* Finishes */}
                    <div className="bg-white p-8 shadow-lg rounded-xl">
                        <h3 className="text-2xl font-semibold mb-4">Finishes</h3>
                        <p>
                            Carbon Peach, Water Repellent, Paper Like Stiff, Wrinkle Free, Teflon Finish,
                            Teflon with Wrinkle Free, Anti-Bacterial, Anti-Viral, Soft Mercerized, Brushing, Chintz.
                        </p>
                    </div>

                    {/* Printing */}
                    <div className="bg-white p-8 shadow-lg rounded-xl md:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-semibold mb-4">Printing</h3>
                        <p>
                            Pigment, Reactive, Disperse, Discharge, Resist and Burn Out.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;