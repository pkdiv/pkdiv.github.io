import { Github, ExternalLink } from "lucide-react";
import { PortfolioData } from "@/lib/data";

interface ProjectsProps {
    data: PortfolioData["projects"];
}

export function Projects({ data }: ProjectsProps) {
    return (
        <section id="projects" className="py-32">
            <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-500 uppercase mb-12">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {data.map((proj, idx) => (
                    <div key={idx} className="group p-8 border border-zinc-900 rounded-2xl bg-zinc-900/10 hover:bg-zinc-900/20 transition-all duration-500">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">{proj.title}</h3>
                            <div className="flex gap-4">
                                {proj.github && (
                                    <a href={proj.github} target="_blank" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                                        <OpenGithubIcon className="w-4 h-4" />
                                    </a>
                                )}
                                {proj.demo && (
                                    <a href={proj.demo} target="_blank" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed mb-6">
                            {proj.description}
                        </p>

                        <div className="flex flex-wrap gap-x-4 text-[10px] uppercase tracking-widest text-zinc-700">
                            {proj.tags.map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function OpenGithubIcon({ className }: { className?: string }) {
    return <Github className={className} />;
}
