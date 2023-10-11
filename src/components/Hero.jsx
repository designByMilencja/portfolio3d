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
                    <div className="w-1 sm:h-80 h-40 secondary-gradient"/>
                </div>
                <div className="text-tertiary flex flex-col max-w-[600px] p-4 overflow-hidden">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-wider">Hi, I&apos;m <span className="mt-5 md:mb-0">Milena Pieńkosz</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl my-2 md:my-5">Fullstack Developer</h2>
                    <div className="my-8">
                        {hero.map(desc => (
                            <p key={desc} className="text-sm text-secondary sm:text-base py-3">{desc}</p>
                        ))}
                    </div>
                    <div className="w-full flex justify-center items-center mt-4">
                        <a href="#projects">
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
                                <p className="capitalize text-warning tracking-wider">projects?</p>
                            </motion.div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
