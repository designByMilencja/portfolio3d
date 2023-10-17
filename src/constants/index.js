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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
            },
            {
                name: "mongodb",
            },
            {
                name: "tailwind",
            },
        ],
        image: design,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
            },
            {
                name: "restapi",
            },
            {
                name: "scss",
            },
        ],
        image: design,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
            },
            {
                name: "supabase",
            },
            {
                name: "css",
            },
        ],
        image: design,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
