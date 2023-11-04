import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs, smyk, design, mysql, express, logo
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

export const hero = [
    "I specialize in frontend development, but I\n" +
    "                        also have applications in my portfolio.",
    "My main passion is combining both of these\n" +
    "                        aspects using technologies like Next.JS."
]

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
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "GIT",
        icon: git,
    },
    {
        name: "FIGMA",
        icon: figma,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
];

const experiences = [
    {
        title: "Seller, Non Fashion Specialist, Manager",
        company_name: "Smyk",
        icon: smyk,
        iconBg: "#1C98A1",
        date: "July 2015 - April 2021",
    },
    {
        title: "Frontend Developer",
        company_name: "Design by Milencja",
        icon: design,
        iconBg: "#D8DBD5",
        date: "Janury 2022 - December 2022",
    },
    {
        title: "Fullstack Developer",
        company_name: "Milena Pieńkosz",
        icon: logo,
        iconBg: "#1C98A1",
        date: "Jan 2023 - still",
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "VanLife Website",
        description:
            "A page for a couple traveling by camper, containing information about visited countries, photo" +
            " galleries - slider and gallery with image filtering. There is also an additional sub-page to encourage" +
            " people to visit the app, which is also about camper life.",
        tags: [
            {
                name: "react.js",
            },
            {
                name: "vite",
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
        name: "Space Mobile House Website",
        description:
            "The site of a company offering frame houses for sale. The site includes information about the company, video and photos showcasing the client's products, a timeline with events, and a contact form to allow interaction for potential customers.",
        tags: [
            {
                name: "next.js",
            },
            {
                name: "react.js",
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
        name: "BrainWave AI Website",
        description:
            "A website made with no code webflow technology. A project describing a company that designs chatbots and performs automation. Fully responsive site with animations to diversify user experience.",
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
        name: "BrainWave AI Website - second version",
        description:
            "A website made with no code webflow technology. A project describing a company that designs chatbots and performs automation. Fully responsive site with animations to diversify user experience.",
        tags: [
            {
                name: "webflow",
            },
        ],
        image: "/projects/webflow2.png",
        source_code_link: "",
        source_live_link: "https://brainstorm-4f8fbf.webflow.io/"
    },
    {
        name: "Project Head Hunter Application",
        description:
            "Group project carried out to specification and mock-ups provided. Working in scram technology, under" +
            " the supervision of a global Scrum Master and the client.Features: authentication, csv file support, restful API, database integration, filtering and searching, pagination",
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
];

export { services, technologies, experiences, testimonials, projects };
