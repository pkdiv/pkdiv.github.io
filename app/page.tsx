import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { BlogSection } from "@/components/sections/blog";
import { Tools } from "@/components/sections/tools";
import { Contact } from "@/components/sections/contact";
import { getPortfolioData } from "@/lib/data";

export default function Home() {
    const data = getPortfolioData();

    return (
        <main className="min-h-screen">
            <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 w-full pb-24">
                <Hero data={data.personal} />
                <BlogSection rssUrl={data.personal.rss_url} blogUrl={data.personal.blog_url} />
                <FeaturedProjects data={data.projects} />
                <Tools data={data.tools} />
                <Contact data={data.personal} />
            </div>
            
            <footer className="fixed inset-x-0 bottom-0 py-8 text-center text-sm text-muted-foreground border-t border-border/50">
                <p>Designed and built for scale. &copy; {new Date().getFullYear()} {data.personal.name}.</p>
            </footer>
        </main>
    );
}
