import {styles} from "../style.js";
import {Link} from "react-router-dom";
import {useState} from "react";
import { close, Logo, menu} from "../assets/index.js";
import {navLinks} from "../constants/index.js";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.language;
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 secondary-gradient`}>
            <div className="w-full max-w-[1200px] flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/"
                      className="flex items-center gap-2"
                      onClick={() => {
                          setActive("");
                          window.scrollTo(0, 0);
                      }}>
                    <img src={Logo}
                         className="h-auto w-[82px]" alt="logo image"/>
                </Link>
                <ul className="hidden list-none sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li key={link.id}
                            className={`${active === link.id ? "text-white font-bold" : "text-white"} hover:text-tertiary text-[18px] cursor-pointer`}
                            onClick={() => setActive(link.id)}>
                            <a href={`#${link.id}`}>{t(`navigation.${link.id}`)}</a>
                        </li>
                    ))}
                    <li>{currentLanguage==='pl' ?
                        <button onClick={() => changeLanguage('en')}>EN</button> :
                        <button onClick={() => changeLanguage('pl')}>PL</button>}
                    </li>
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu}
                         alt="icon menu"
                         className="w-[28px] h-[28px] object-contain cursor-pointer"
                         onClick={()=>setToggle(!toggle)}/>
                    <div
                    className={`${!toggle ? 'hidden' : 'flex'} p-6 tertiary-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.id}
                                    className={`${active === link.id ? "text-white font-bold" : "text-white"} hover:text-secondary font-poppins cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.id);
                                    }}>
                                    <a href={`#${link.id}`}>{t(`navigation.${link.id}`)}</a>
                                </li>
                            ))}
                            <li>{currentLanguage==='pl' ?
                                <button onClick={() => changeLanguage('en')}>EN</button> :
                                <button onClick={() => changeLanguage('pl')}>PL</button>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
