import { PortfolioData } from "@/lib/data";

interface IntroProps {
    data: PortfolioData["personal"];
}

export function Intro({ data }: IntroProps) {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center py-20">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-zinc-100 mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 font-brand">
                    {data.name}
                </h1>
                <h2 className="text-xl sm:text-2xl font-light text-zinc-400 max-w-2xl leading-relaxed mb-12">
                    {data.bio_lines.map((line, idx) => (
                        <span key={idx} className="block">
                            <span dangerouslySetInnerHTML={{ __html: line }} />
                        </span>
                    ))}
                </h2>

                <div className="flex flex-wrap gap-6">
                    <a href={`mailto:${data.email}`} className="text-sm font-medium text-zinc-100 hover:text-zinc-400 transition-colors underline underline-offset-8">
                        Get in touch
                    </a>
                    <a href={data.resume_url} target="_blank" className="text-sm font-medium text-zinc-500 hover:text-zinc-100 transition-colors">
                        View Resume
                    </a>
                    <a href={data.blog_url} target="_blank" className="text-sm font-medium text-zinc-500 hover:text-zinc-100 transition-colors">
                        Read Blog
                    </a>
                </div>
            </div>
        </section>
    );
}
