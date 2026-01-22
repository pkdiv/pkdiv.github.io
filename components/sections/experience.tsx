import { PortfolioData } from "@/lib/data";

interface ExperienceProps {
    data: PortfolioData["experiences"];
}

export function Experience({ data }: ExperienceProps) {
    return (
        <section id="experience" className="py-32">
            <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-500 uppercase mb-12">Experience</h2>

            <div className="space-y-20">
                {data.map((item, idx) => (
                    <div key={idx} className="group relative">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                            <h3 className="text-xl font-bold text-zinc-100">{item.role}</h3>
                            <span className="text-xs font-medium text-zinc-600 uppercase tracking-widest">{item.period}</span>
                        </div>

                        <div className="text-zinc-400 font-medium mb-4">{item.company}</div>

                        <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed max-w-2xl">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
