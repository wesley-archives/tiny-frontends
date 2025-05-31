import type { Site, Metadata, Link } from "@types";

export const SITE: Site = {
    title: "Wizard Build - The Ultimate Backend Setup CLI",
    description: "Wizard Build helps developers effortlessly set up complete backend environments in seconds. Choose your stack, automate configurations, and focus on building amazing applications.",
    author: "wizardbuild",
    keywords: "backend, CLI, setup, JavaScript, TypeScript, Node.js, Deno, Bun, Express, frameworks"
};

export const HOME: Metadata = {
    title: "Wizard Build - Effortless Backend Setup",
    description: "Welcome to Wizard Build, the CLI that simplifies backend development with custom setups for Node.js, TypeScript, Express, and more.",
};

export const DOCS: Metadata = {
    title: "Wizard Build Docs - Master the Magic",
    description: "Explore our detailed guides to master backend development with Wizard Build. Learn about frameworks, databases, and workflows.",
};

export const SOCIALS: Link[] = [
    {
        title: "X",
        url: "https://x.com/wizardbuild",
        icon: "x",
        main: true,
    },
    {
        title: "GitHub",
        url: "https://github.com/wizardbuild",
        icon: "github",
        main: true,
    }
];
