import {motion} from "framer-motion";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {textVariant} from "../utils/motion.js";
import {styles} from "../style.js";
import {SectionWrapper} from "../hoc/index.js";
import {experiences} from "../constants/index.js";

const ExperienceCard = ({experience}) =>
    <VerticalTimelineElement
        contentStyle={{background: "#fff", color: "#1C98A1"}}
        contentArrowStyle={{borderLeft: "#fff"}}
        date={experience.date}
        iconStyle={{background: experience.iconBg}}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img src={experience.icon}
                     alt={experience.company_name}
                     className="w-[60%] h-[60%] rounded-xl object-contain"
                />
            </div>
        }
    >
        <div>
            <h3 className="text-bold text-xl">
                {experience.title}
            </h3>
            <p className="text-secondary text-base font-bold">{experience.company_name}</p>
        </div>
    </VerticalTimelineElement>

const Experience = () => {
    return (
        <section className="w-full rounded-xl secondary-gradient pb-5">
            <motion.div
                variants={textVariant()}
                className="w-full flex flex-col items-start pt-5">
                <p className={`${styles.sectionText}`}>What I have done so far</p>
                <h2 className={`${styles.h2Text} text-tertiary`}>Work Experience</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                        />
                    ))}

                </VerticalTimeline>
            </div>
        </section>
    );
}

export default SectionWrapper(Experience, 'work');
