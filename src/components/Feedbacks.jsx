import {motion} from 'framer-motion';
import {SectionWrapper} from "../hoc/index.js";
import {styles} from "../style.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {testimonials} from "../constants/index.js";

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => {
    return (
        <motion.div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className="bg-tertiary p-10 rounded-xl xs:w-[320px] w-full">
            <p className="text-secondary font-black text-[48px]">"</p>
            <div className="mt-1">
                <p className="text-primary tracking-wider text-[18px]">{testimonial}</p>
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                        <p className="text-primary font-medium text-[16px]">
                            <span className="github-gradient">@</span> {name}
                        </p>
                        <p className="mt-1 github-gradient text-[12px]">
                            {designation} of {company}
                        </p>
                    </div>
                    <img
                    src={image}
                    alt={`feedback by ${name}`}
                    className="w-10 h-10 rounded-full object-cover"/>
                </div>
            </div>
        </motion.div>
    )
}

const Feedbacks = () => {
    return (
        <div className="mt-12 rounded-xl">
            <div className={`${styles.padding} github-gradient p-[2px] shadow-card rounded-xl min-h-[300px]`}>
                <motion.div
                    variants={textVariant()}
                    className="w-full flex flex-col items-start pt-5">
                    <p className={`${styles.sectionText}`}>What others say</p>
                    <h2 className={`${styles.h2Text} text-secondary`}>Testimonials</h2>
                </motion.div>
            </div>
            <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    );
}

export default SectionWrapper(Feedbacks, "");
