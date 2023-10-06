import {styles} from "../style.js";
import {Link} from "react-router-dom";
import {useState} from "react";
import { close, l, menu} from "../assets/index.js";
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 secondary-gradient`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/"
                      className="flex items-center gap-2"
                      onClick={() => {
                          setActive("");
                          window.scrollTo(0, 0);
                      }}>
                    <img src={l}
                         className="h-auto w-[82px]" alt="logo image"/>
                </Link>
                <ul className="hidden list-none sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li key={link.id}
                            className={`${active === link.title ? "text-white font-bold" : "text-white"} hover:text-tertiary text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
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
                                    className={`${active === link.title ? "text-white font-bold" : "text-white"} hover:text-tertiary font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
