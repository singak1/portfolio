import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si"
import { Tooltip } from "react-tooltip"

const Skills = () => {
    return(
        <div className="skills">
            <SiExpress data-tooltip-id="express-tooltip" data-tooltip-content="Express" data-tooltip-place="bottom"/>
            <SiMongodb data-tooltip-id="mongo-tooltip" data-tooltip-content="MongoDB" data-tooltip-place="bottom"/>
            <SiNodedotjs data-tooltip-id="nodejs-tooltip" data-tooltip-content="Node JS" data-tooltip-place="bottom"/>
            <SiReact data-tooltip-id="react-tooltip" data-tooltip-content="React" data-tooltip-place="bottom"/>
            <Tooltip id="express-tooltip" />
            <Tooltip id="mongo-tooltip" />
            <Tooltip id="nodejs-tooltip" />
            <Tooltip id="react-tooltip" />
        </div>
        
    )
}

export default Skills