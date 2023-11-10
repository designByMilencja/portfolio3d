import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import {SectionWrapper} from "../hoc/index.js";
import {useRef, useState} from "react";
import {slideIn} from "../utils/motion.js";
import {styles} from "../style.js";
import EarthCanvas from "./canvas/EarthCanvas.jsx";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY).then(
            () => {
                setLoading(false)
                alert('Thank you. I will get back to you as soon as possible');
                setForm({
                    name: '',
                    email: '',
                    message: ''
                })
            }, (error) => {
                setLoading(false)
                console.log(e)
                alert('Something went wrong')
            }
        )
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] tertiary-gradient p-8 rounded-xl"
            >
                <p className={`${styles.sectionText}`}>{t('contact.getInTouch')}</p>
                <h2 className={`${styles.h2Text} text-secondary`}>{t('contact.title')}</h2>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-primary font-medium mb-4">{t('contact.name')}</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="bg-primary py-4 px-6 placeholder:text-secondary text-tertiary rounded-xl outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-primary font-medium mb-4">{t('contact.email')}</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="bg-primary py-4 px-6 placeholder:text-secondary text-tertiary rounded-xl outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-primary font-medium mb-4">{t('contact.message')}</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="bg-primary py-4 px-6 placeholder:text-secondary text-tertiary rounded-xl outlined-none border-none font-medium"
                        />
                    </label>
                    <button type="submit"
                            className="github-gradient tracking-wider py-3 px-8 outline-none w-fit uppercase text-primary font-bold shadow-md shadow-primary rounded-xl self-center">
                        {loading ? t('contact.sending') : t('contact.send')}
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
