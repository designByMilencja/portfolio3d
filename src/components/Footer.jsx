
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full secondary-gradient p-5">
            <p className="text-center text-primary m-5">
                &copy; Copyright {year} <a href="https://github.com/designByMilencja/"
                                           className="text-tertiary hover:text-primary ml-2">DesignByMilencja </a>
            </p>
        </footer>
    );
}

export default Footer;
