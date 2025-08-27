import {motion} from "framer-motion";
import {Card, CardContent, CardHeader, CardTitle,} from "../components/ui/card";
import {Badge} from "../components/ui/badge";
import type {LucideIcon} from "lucide-react";
import {BadgeCheck, Clock, Factory, FlaskConical, UserCog,} from "lucide-react";

interface Strength {
    title: string;
    description: string;
    icon: LucideIcon;
}

const strengths: Strength[] = [
    {
        title: "Backward Linkage of Yarns",
        description:
            "Strong, vertically integrated sourcing and production pipeline for yarns.",
        icon: Factory,
    },
    {
        title: "Expert Team (Local & Foreign)",
        description:
            "Highly skilled experts from both local and international backgrounds do the needful, end‑to‑end.",
        icon: UserCog,
    },
    {
        title: "Dedicated R&D",
        description:
            "A strong, focused research & development team driving continuous improvement.",
        icon: FlaskConical,
    },
    {
        title: "On‑Time Delivery",
        description:
            "We deliver on time, exactly as committed—every single time.",
        icon: Clock,
    },
    {
        title: "Finest Yarns, Customer‑Driven",
        description:
            "We always work with the finest yarns to match each customer’s quality requirements.",
        icon: BadgeCheck,
    },
];

const itemVariants = {
    hidden: {opacity: 0, y: 16},
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {delay: i * 0.06, duration: 0.45, ease: "easeOut"},
    }),
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.05},
    },
};

export default function StrengthsShowcase() {
    return (
        <div
            className="relative isolate w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 md:p-12">
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 blur-3xl"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 blur-3xl"
            />

            <div className="mx-auto max-w-5xl text-center">
                <Badge className="mb-3 text-3xl text-white">Our Strengths</Badge>
                <h2 className="mb-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Built for Quality. Committed to Delivery.
                </h2>
                <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
                    Five core advantages that power our partners’ success across sourcing,
                    development, and on‑time fulfillment.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
                {strengths.map((s, i) => (
                    <motion.div key={s.title} custom={i} variants={itemVariants}>
                        <Card
                            className="group relative h-full border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600 hover:shadow-xl hover:shadow-black/30">
                            <div
                                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-inset ring-white/10 transition-opacity duration-300 group-hover:opacity-100"/>
                            <CardHeader className="flex flex-row items-start gap-3">
                                <div
                                    className="rounded-2xl bg-slate-700/60 p-3 ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-slate-700">
                                    <s.icon className="h-6 w-6 text-white"/>
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-lg text-white">{s.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed text-slate-300">
                                    {s.description}
                                </p>
                            </CardContent>
                            <div
                                className="absolute bottom-0 left-0 right-0 mx-4 mb-3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"/>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            <div className="mx-auto mt-10 flex max-w-5xl items-center justify-center gap-2">
        <span className="text-xs uppercase tracking-widest text-slate-400">
          Quality • R&D • Reliability
        </span>
            </div>
        </div>
    );
}