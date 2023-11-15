import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Navbar, Works, Tech, Hero, StarsCanvas} from "./components/index.js";
import Footer from "./components/Footer.jsx";
import './utils/i18n';
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Resources from "./components/Resources.jsx";

const MainContent = () => {
    return (
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-center">
                    <Navbar/>
                    <Hero/>
                </div>
                <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <About/>
                </div>
                <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <Experience/>
                    <Tech/>
                </div>
                <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <Works/>
                </div>
                <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <Feedbacks/>
                </div>
                <div className="relative z-0 bg-hero-pattern bg-no-repeat bg-cover bg-center  pb-3">
                    <Contact/>
                    <StarsCanvas/>
                <Resources/>
                </div>
                <Footer/>
            </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App
