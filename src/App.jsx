import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Navbar, Works, Tech, Hero, StarsCanvas} from "./components/index.js";
import ComputersCanvas from "./components/canvas/ComputersCanvas.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-center">
                    <Navbar/>
                    <Hero/>
                </div>
                <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <About/>
                    <div className="flex-wrap h-[500px]">
                        <ComputersCanvas/>
                    </div>
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
                <div className="relative z-0">
                    <Contact/>
                    <StarsCanvas/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
