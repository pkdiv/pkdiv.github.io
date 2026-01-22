import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface PortfolioData {
    personal: {
        name: string;
        role: string;
        bio_lines: string[];
        email: string;
        resume_url: string;
        blog_url: string;
        socials: {
            github: string;
            linkedin: string;
        };
    };
    experiences: {
        role: string;
        company: string;
        period: string;
        description: string;
    }[];
    projects: {
        title: string;
        description: string;
        github?: string;
        demo?: string;
        tags: string[];
    }[];
}

export function getPortfolioData(): PortfolioData {
    const filePath = path.join(process.cwd(), 'data', 'portfolio.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as PortfolioData;
}
