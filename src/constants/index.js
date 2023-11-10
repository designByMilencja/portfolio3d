import {
    mobile,
    backend,
    creator,
    web,
    js,
    typescript,
    css,
    react,
    tailwind,
    node,
    mongodb,
    git, smyk, design, mysql, express, wordpress, webflow, html,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];


const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Next Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: js,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Node JS",
        icon: node,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "React JS",
        icon: react,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "GIT",
        icon: git,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Wordpress",
        icon: wordpress,
    },
    {
        name: "Webflow",
        icon: webflow,
    },
];

const experiences = [
    {
        company_name: "Smyk",
        icon: smyk,
        iconBg: "#1C98A1",
    },
    {
        company_name: "Design by Milencja - Freelancing",
        icon: design,
        iconBg: "#D8DBD5",
    },
];

const testimonials = [
    {
        name: "Wojciech Z.",
    },
    {
        name: "Martyna P.",
    },
];

const projects = [
    {
        name: "VanLife Website",
        tags: [
            {
                name: "react.js",
            },
            {
                name: "tailwind.css",
            },
        ],
        image: "/projects/vanlife.png",
        source_code_link: "https://van-life-kohl.vercel.app/",
        source_live_link: "https://github.com/designByMilencja/Van-Life-Website",
    },
    {
        name: "VanLife App",
        tags: [
            {
                name: "react.js",
            },
            {
                name: "express.js",
            },
            {
                name: "sass",
            },
            {
                name: "mysql",
            },
        ],
        image: "/projects/camper.png",
        source_code_link: "https://projectcamper.networkmanager.pl/",
        source_live_link: "https://github.com/designByMilencja/Project-Camper-NewFrontend",
    },
    {
        name: "Space Mobile House Website",
        tags: [
            {
                name: "next.js",
            },
            {
                name: "tailwind.css",
            },
            {
                name: "framer-motion",
            },
            {
                name: "email.js",
            },
        ],
        image: "/projects/spacemobile.png",
        source_code_link: "",
        source_live_link: "https://github.com/designByMilencja/frame-houses",
    },
    {
        name: "Project Head Hunter Application",
        tags: [
            {
                name: "react.js",
            },
            {
                name: "express.js",
            },
            {
                name: "material.ui",
            },
            {
                name: "mongodb",
            },
            {
                name: "typescript",
            },
            {
                name: "jwt",
            },
        ],
        image: "/projects/headhunter.png",
        source_code_link: "https://github.com/designByMilencja/g7-headhunter-server",
        source_live_link: "https://www.youtube.com/watch?v=B_WKuYeoT2Y"
    },
    {
        name: "BrainWave AI Website",
        tags: [
            {
                name: "webflow",
            },
        ],
        image: "/projects/webflow.png",
        source_code_link: "",
        source_live_link: "https://brainstorm-4f8fbf.webflow.io/"
    },
    {
        name: "BrainWave AI Website II",
        tags: [
            {
                name: "webflow",
            },
        ],
        image: "/projects/ai-brain.png",
        source_code_link: "",
        source_live_link: "https://brainstorm-4f8fbf.webflow.io/"
    },

];

export { services, technologies, experiences, testimonials, projects };
