import React from "react";

const stats = [
    {icon: "👥", value: "140+", label: "Employees"},
    {icon: "🧵", value: "105", label: "Number of looms"},
    {icon: "🏭", value: "2", label: "Buildings"},
    {icon: "👕", value: "10 Million", label: "Yards per year"},
];

const CompanyStats: React.FC = () => {
    return (
        <section
            className="relative py-16"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div
                className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                {stats.map((item, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                        <div className="text-5xl">{item.icon}</div>
                        <div className="text-3xl font-bold">{item.value}</div>
                        <div className="text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompanyStats;