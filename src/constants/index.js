import {
    mobile,
    backend,
    creator,
    web,
    js,
    typescript,
    html,
    css,
    react,
    tailwind,
    node,
    mongodb,
    git,
    figma,
    threejs, smyk, design, mysql, express, wordpress, webflow,
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
        title: "Manager, Non Fashion Specialist, Seller",
        company_name: "Smyk",
        icon: smyk,
        iconBg: "#1C98A1",
        date: "July 2015 - April 2021",
    },
    {
        title: "Fullstack Developer",
        company_name: "Design by Milencja - Freelancing",
        icon: design,
        iconBg: "#D8DBD5",
        date: "Janury 2023 - still",
    },
];

const testimonials = [
    {
        testimonial:
            "Milena is a committed person and cares about the client's comfort, she is open to suggestions and gives a lot of herself, it is a pleasure to work with her. The website made by her meets my expectations 100%.",
        name: "Wojciech Z.",
        designation: "Architect IT",
    },
    {
        testimonial:
            "Milena works on my application with dedication, I am confident in her skills. Her ideas are valuable and you can see that she doesn't care only about profit, but really wants to help my business.",
        name: "Martyna P.",
        designation: "Nursery",
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
                name: "tailwind.css",
            },
        ],
        image: "/projects/vanlife.png",
        source_code_link: "https://van-life-kohl.vercel.app/",
        source_live_link: "https://github.com/designByMilencja/Van-Life-Website",
    },
    {
        name: "VanLife App",
        description:
            "Application for recording expenses by category, country and month. Currently my travel expenses are" +
            " entered there, I intend to develop the functionality so that it is possible for other users to add" +
            " their expenses. I did frontend and backend - both code are in my github page.",
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
        description:
            "The site of a company offering frame houses for sale. The site includes information about the company, video and photos showcasing the client's products, a timeline with events, and a contact form to allow interaction for potential customers.",
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
        image: "/projects/ai-brain.png",
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
