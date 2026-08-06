import Link from "next/link";
import { PortfolioData } from "@/lib/data";

export function Hero({ data }: { data: PortfolioData['personal'] }) {
    return (
        <section id="home" className="pt-24 sm:pt-32 pb-12 flex flex-col justify-center min-h-[60vh]">
            <div className="space-y-6 animate-fade-in max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                    <span className="block text-accent text-lg sm:text-xl font-mono mb-4">Hi, I&apos;m {data.name}.</span>
                    {data.role}
                </h1>
            </div>
        </section>
    );
}
