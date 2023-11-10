import {motion} from "framer-motion";
import {SectionWrapper} from "../hoc/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {styles} from "../style.js";
import {projects} from "../constants/index.js";
import {Tilt} from "react-tilt";
import {desktop, github,} from "../assets/index.js";
import LinkToProject from "./LinkToProject.jsx";
import {useTranslation} from "react-i18next";

export const ProjectCard = ({index, name, description, tags, image, source_code_link, source_live_link}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{
                max: 45,
                scale: 1,
                speed: 450
            }}
                  className="flex flex-col bg-tertiary border border-secondary p-2 rounded-xl sm:w-[360px] w-full">
                <div className="relative w-full h-[400px] mt-2"
                     style={{
                         background: `url(${image})`,
                         backgroundSize: 'cover',
                         backgroundPosition: "center",
                         backgroundRepeat:"no-repeat",
                         position: 'relative',
                     }}>
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
                        <LinkToProject image={github} alt="github icon" src={source_code_link}/>
                        <LinkToProject image={desktop} alt="desktop icon" src={source_live_link}/>
                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-between p-1">
                <div className="mt-5 font-bold flex flex-col justify-between">
                    <h3 className="text-primary text-center text-[24px]">{name}</h3>
                    <p className="m-3 text-primary text-[14px]">{description}</p>
                </div>
                <div className="m-5 flex flex-wrap gap-2 justify-center">
                    {tags.map((tag) => (
                        <p key={tag.name} className="rounded-xl p-3 text-[14px] github-gradient font-bold">#{tag.name}</p>
                    ))}
                </div>
                </div>
            </Tilt>
        </motion.div>
    )
}
const Works = () => {
    const { t } = useTranslation();
    const abouts = t('projects.abouts', { returnObjects: true });

    return (
        <section  className="w-full rounded-xl tertiary-gradient pb-5">
            <motion.div
                variants={textVariant()}
                className="w-full flex flex-col items-start pt-5">
                <p className={`${styles.sectionText}`}>{t('projects.p')}</p>
                <h2 className={`${styles.h2Text} text-secondary`}>{t('projects.title')}</h2>
            </motion.div>
            <div className="w-full flex flex-wrap justify-evenly">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className={`${styles.sectionSubText} ${styles.padding} max-w-[400px]`}
                >
                    {t('projects.desc1')}
                </motion.p>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className={`${styles.sectionSubText} ${styles.padding} max-w-[400px]`}
                >
                    {t('projects.desc2')}
                </motion.p>
            </div>
            <div className="mt-20 p-2 flex flex-wrap gap-7 justify-evenly">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index} `}
                        index={index}
                        {...project}
                        description={abouts[index]}
                    />
                ))}
            </div>
        </section>
    );
}

export default SectionWrapper(Works, "projects");
