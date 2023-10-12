import ComputersCanvas from "./ComputersCanvas.jsx";
import {motion} from "framer-motion";
import {styles} from "../style.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {services} from "../constants/index.js";
import {Tilt} from "react-tilt";
import {SectionWrapper} from "../hoc/index.js";

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-[90%] mx-auto">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 1.3)}
                className="w-full light-orange-gradient p-[1px] rounded-xl shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-xl px-2 py-5 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                    <h3 className="text-xl font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}
const About = () => {
    return (
        <section className="w-full rounded-xl tertiary-gradient">
            <div className="flex flex-col xs:flex-row justify-around items-start p-4 overflow-hidden">
                <motion.div
                    variants={textVariant()}
                    className="my-10 w-full xs:w-1/3 flex flex-col justify-center items-center">
                    <p className={`${styles.sectionText}`}>Introduction</p>
                    <h2 className={`${styles.h2Text}`}>About me</h2>
                </motion.div>
                <div className="flex-wrap h-[200px]">
                    <ComputersCanvas/>
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap my-20">
                <div className="w-full flex flex-col ss:flex-row md:flex-col md:w-1/2 justify-around">
                    <motion.p
                        variants={fadeIn("", "", .1, 1)}
                        className={`${styles.sectionText} ${styles.padding} max-w-[400px]`}> I’m currently
                        traveling
                        around the world in a camper van.
                        I am interested in a fullstack developing so every day I develop my skills on real projects. You
                        can see
                        full code of my all project on my github <a className="text-secondary"
                                                                    href="https://github.com/designByMilencja">
                            here!
                        </a>
                    </motion.p>
                    <motion.p
                        variants={fadeIn("", "", 0.3, 1)}
                        className={`${styles.sectionText} ${styles.padding} max-w-[400px]`}>
                        I have experience in Typescript and Javascript, I know frameworks like React, Next.
                        I collaborate closely with clients to create amazing and useful products. Let&apos;s work
                        together to bring your idea to life!
                    </motion.p>
                </div>
                <div className="mt-10 flex flex-wrap p-4 gap-5 text-secondary">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SectionWrapper(About, "about");
