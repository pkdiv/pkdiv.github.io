import { PortfolioData } from "@/lib/data";

interface ContactProps {
    data: PortfolioData["personal"];
}

export function Contact({ data }: ContactProps) {
    return (
        <section id="contact" className="py-32 pb-48">
            <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-500 uppercase mb-12">Contact</h2>

            <div className="max-w-2xl">
                <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                    I’m currently looking for new opportunities in Network Security and Infrastructure.
                    If you have a project in mind or just want to chat, my inbox is always open.
                </p>

                <a
                    href={`mailto:${data.email}`}
                    className="inline-block px-12 py-4 bg-zinc-100 text-black text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 rounded-full"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
}
