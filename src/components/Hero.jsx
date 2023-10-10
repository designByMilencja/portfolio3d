import {styles} from "../style.js";
import ComputersCanvas from "./ComputersCanvas.jsx";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-center gap-5`}>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-3 h-3 bg-secondary"/>
                    <div className="w-1 sm:h-80 h-40 secondary-gradient"/>
                </div>
                <div className="text-tertiary flex flex-col font-bold text-xl tracking-wider max-w-[600px]">
                    <h1 className="text-2xl sm:text-5xl">Hi, I am <span className="mt-5 md:mb-0">Milena Pieńkosz</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl my-2 md:my-5">Fullstack Developer</h2>
                    <p className="text-sm text-secondary sm:text-base p-1">I specialize in frontend development, but I
                        also have applications in my portfolio. </p>
                    <p className="text-sm text-secondary sm:text-base p-1">My main passion is combining both of these
                        aspects using technologies like Next.js.</p>
                    <ComputersCanvas/>
                </div>
            </div>
        </section>
    );
}

export default Hero;
