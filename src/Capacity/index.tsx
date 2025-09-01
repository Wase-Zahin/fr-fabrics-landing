import React from "react";

const Capacity: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Our Capacity
                </h2>

                <div className="flex items-center justify-center space-x-4 mb-10">
                    <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                    <div className="w-24 h-0.5 bg-red-600"></div>
                </div>

                <div
                    className="inline-flex flex-col items-center justify-center px-10 py-12 rounded-2xl bg-white shadow-lg border border-red-100 hover:shadow-xl hover:border-red-200 transition-all duration-300">
                    <p className="text-5xl font-extrabold text-red-600 mb-3">
                        10 Million
                    </p>
                    <p className="text-lg sm:text-xl text-gray-700 font-medium">
                        Yards Per Annum
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Capacity;