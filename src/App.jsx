import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Navbar, StarsCanvas, Works, Tech, Hero} from "./components/index.js";

const App = () => {
    return (
        <BrowserRouter>
            <div className="bg-hero-pattern bg-cover bg-center relative z-0">
                <Navbar/>
                <Hero/>
                <About/>
                <Experience/>
                <Tech/>
                <Works/>
                <Feedbacks/>
                <div className="relative z-0">
                    <Contact/>
                    <StarsCanvas/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
