import {SectionWrapper} from "../hoc/index.js";
import {technologies} from "../constants/index.js";
import BallCanvas from "./canvas/BallCanvas.jsx";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology, index) => (
                <div key={technology.name} className={`m-2 w-28 h-28  rounded-xl cursor-pointer`}>
                    <BallCanvas icon={technology.icon}/>
                    <p className={`text-center ${index%2 ? "secondary-gradient" : 
                    "tertiary-gradient"} rounded-xl p-1 my-1`}>{technology.name}</p>
                </div>
            ))}
        </div>
    );
}

export default SectionWrapper(Tech, "");
