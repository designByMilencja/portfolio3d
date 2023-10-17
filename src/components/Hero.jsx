import { motion } from "framer-motion";
import {styles} from "../style.js";
import {hero} from "../constants/index.js";
import {walk} from "../assets/index.js";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-[1200px] mx-auto flex flex-row items-center gap-5`}>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-3 h-3 bg-secondary"/>
                    <div className="w-1 sm:h-60 h-40 secondary-gradient"/>
                </div>
                <div className="w-full text-tertiary flex flex-col p-6 overflow-hidden rounded-xl primary-gradient">
                    <h1 className="text-2xl ss:text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">Hi, I&apos;m <span className="mt-5 md:mb-0">Milena Pieńkosz</span>
                    </h1>
                    <h2 className={`${styles.h2Text} my-1 md:my-5 text-secondary`}>Fullstack Developer</h2>
                    <div className="my-2 max-w-[400px]">
                        {hero.map(desc => (
                            <p key={desc} className={`${styles.sectionSubText} p-4`}>{desc}</p>
                        ))}
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <a href="#projects">
                            <p className="capitalize text-tertiary tracking-wider">projects?</p>
                            <motion.div
                                className="flex justify-center items-center"
                            animate={{
                                y: [0, 0, 40],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}>
                                <img className="w-[25px] h-[64px]" src={walk} alt="icon of walking person"/>
                            </motion.div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
