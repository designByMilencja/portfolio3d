import {motion} from "framer-motion";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {textVariant} from "../utils/motion.js";
import {styles} from "../style.js";
import {SectionWrapper} from "../hoc/index.js";
import {experiences} from "../constants/index.js";
import {useTranslation} from "react-i18next";

const ExperienceCard = ({experience, title, date}) => {
    return(
        <VerticalTimelineElement
        contentStyle={{background: "#F98D52", color: "#fff"}}
        contentArrowStyle={{borderLeft: "#fff"}}
        date={date}
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
                {title}
            </h3>
            <p className="text-tertiary text-base font-bold">{experience.company_name}</p>
        </div>
    </VerticalTimelineElement>)
}

const Experience = () => {
    const { t } = useTranslation();
    const occupations = t('experience.occupation', { returnObjects: true });
    const dates = t('experience.date', { returnObjects: true });
    return (
        <section className="w-full rounded-xl tertiary-gradient pb-5">
            <motion.div
                variants={textVariant()}
                className="w-full flex flex-col items-start pt-5">
                <p className={`${styles.sectionText}`}>{t('experience.whatIHaveDone')}</p>
                <h2 className={`${styles.h2Text} text-secondary`}>{t('experience.title')}</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                            t={t}
                            title={occupations[index]}
                            date={dates[index]}
                        />
                    ))}

                </VerticalTimeline>
            </div>
        </section>
    );
}

export default SectionWrapper(Experience, 'work');
