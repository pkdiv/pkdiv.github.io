import { LayoutShell } from "@/components/layout-shell";
import { Intro } from "@/components/sections/intro";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { getPortfolioData } from "@/lib/data";

export default function Home() {
    const data = getPortfolioData();

    return (
        <LayoutShell data={data}>
            <div className="flex-1 max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 w-full">
                <Intro data={data.personal} />
                <Experience data={data.experiences} />
                <Projects data={data.projects} />
                <Contact data={data.personal} />
            </div>
        </LayoutShell>
    );
}
