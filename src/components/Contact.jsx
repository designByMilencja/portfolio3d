import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import {SectionWrapper} from "../hoc/index.js";
import {useRef, useState} from "react";
import {slideIn} from "../utils/motion.js";
import {styles} from "../style.js";
import EarthCanvas from "./canvas/EarthCanvas.jsx";


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);

    function handleSubmit() {

    }

    function handleChange() {

    }

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] tertiary-gradient p-8 rounded-xl"
            >
                <p className={`${styles.sectionText}`}>Get in touch</p>
                <h2 className={`${styles.h2Text} text-secondary`}>Contact</h2>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-primary font-medium mb-4">Your name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-primary py-4 px-6 placeholder:text-secondary text-primary rounded-xl outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-primary font-medium mb-4">Your email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-primary py-4 px-6 placeholder:text-secondary text-primary rounded-xl outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-primary font-medium mb-4">Your Message</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Type your message?"
                            className="bg-primary py-4 px-6 placeholder:text-secondary text-primary rounded-xl outlined-none border-none font-medium"
                        />
                    </label>
                    <button type="submit"
                            className="github-gradient tracking-wider py-3 px-8 outline-none w-fit uppercase text-primary font-bold shadow-md shadow-primary rounded-xl self-center">
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas/>
            </motion.div>
        </div>
    );
}

export default SectionWrapper(Contact, "contact");
