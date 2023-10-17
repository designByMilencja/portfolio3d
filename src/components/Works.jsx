import {motion} from "framer-motion";
import {SectionWrapper} from "../hoc/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {styles} from "../style.js";
import {projects} from "../constants/index.js";
import {Tilt} from "react-tilt";
import {desktop, github,} from "../assets/index.js";
import LinkToProject from "./LinkToProject.jsx";

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{
                max: 45,
                scale: 1,
                speed: 450
            }}
                  className="bg-tertiary border border-secondary p-5 rounded-xl sm:w-[360px] w-full">
                <div className="relative w-full h-[300px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-xl"/>
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
                        <LinkToProject image={github} alt="github icon" src={source_code_link}/>
                        <LinkToProject image={desktop} alt="desktop icon" src={source_code_link}/>
                    </div>
                </div>
                <div className="mt-5 font-bold">
                    <h3 className="text-primary text-[24px]">{name}</h3>
                    <p className="mt-2 text-primary text-[14px]">{description}</p>
                </div>
                <div className="shadow-card mt-4 flex flex-wrap gap-2 justify-center">
                    {tags.map((tag) => (
                        <p key={tag.name} className="rounded-xl p-3 text-[14px] github-gradient font-bold">#{tag.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}
const Works = () => {
    return (
        <section  className="w-full rounded-xl tertiary-gradient pb-5">
            <motion.div
                variants={textVariant()}
                className="w-full flex flex-col items-start pt-5">
                <p className={`${styles.sectionText}`}>My projects</p>
                <h2 className={`${styles.h2Text} text-secondary`}>Projects</h2>
            </motion.div>
            <div className="w-full flex flex-wrap justify-evenly">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className={`${styles.sectionSubText} ${styles.padding} max-w-[400px]`}
                >
                    I really like do a lot of different cases because I love to learn new things
                    about our world, many industries, new people and my work. each case of my client is treated
                    individually and I conduct a detailed research.
                </motion.p>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className={`${styles.sectionSubText} ${styles.padding} max-w-[400px]`}
                >
                    Below are the projects I have done so far. These include both websites and applications. Each
                    project is briefly described and accompanied by a link to the hosted project and also directly to
                    its code on github.
                </motion.p>
            </div>
            <div className="mt-20 p-2 flex flex-wrap gap-7 justify-evenly">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index} `}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
}

export default SectionWrapper(Works, "projects");
