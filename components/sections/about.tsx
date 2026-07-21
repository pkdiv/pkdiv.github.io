import { PortfolioData } from "@/lib/data";

export function About({ data }: { data: PortfolioData['personal'] }) {
    return (
        <section id="experience" className="py-24 space-y-8 border-t border-border/50">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">About</h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none text-foreground/90 space-y-4 text-lg leading-relaxed">
                {data.bio_lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
            </div>
        </section>
    );
}
