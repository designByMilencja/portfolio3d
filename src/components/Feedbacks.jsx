import {motion} from 'framer-motion';
import {SectionWrapper} from "../hoc/index.js";
import {styles} from "../style.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {testimonials} from "../constants/index.js";
import {useTranslation} from "react-i18next";

export const FeedbackCard = ({index, testimonial, name, designation}) => {
    return (
        <motion.div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className="primary-gradient shadow-card p-2 rounded-xl xs:w-[320px] w-full">
            <p className="text-tertiary font-black text-[48px]">"</p>
            <div className="mt-1 bg-secondary p-4 rounded-xl min-h-[350px]">
                <p className="text-primary tracking-wider text-[18px]">{testimonial}</p>
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="text-primary flex-1 flex flex-col">
                        <p className="font-medium text-[16px]">
                            <span className="rounded-xl">@</span> {name}
                        </p>
                        <p className="mt-1 text-[12px] rounded-xl">
                            {designation}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const Feedbacks = () => {
    const { t } = useTranslation();
    const testimonialsText = t('feedbacks.testimonials', { returnObjects: true });
    const designationsText = t('feedbacks.designations', { returnObjects: true });
    return (
        <div className="mt-12 rounded-xl">
            <div className={`${styles.padding} tertiary-gradient p-[2px] shadow-card rounded-xl min-h-[300px]`}>
                <motion.div
                    variants={textVariant()}
                    className="w-full flex flex-col items-start pt-5">
                    <p className={`${styles.sectionText}`}>{t('feedbacks.whatOthersSay')}</p>
                    <h2 className={`${styles.h2Text} text-secondary`}>{t('feedbacks.title')}</h2>
                </motion.div>
            </div>
            <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                {testimonials.map((testi, index) => (
                    <FeedbackCard
                        key={index}
                        index={index}
                        {...testi}
                        testimonial={testimonialsText[index]}
                        designation={designationsText[index]}
                    />
                ))}
            </div>
        </div>
    );
}

export default SectionWrapper(Feedbacks, "feedbacks");
