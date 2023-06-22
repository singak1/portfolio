import Skills from "../Components/Skills"
import AboutMe from "../Components/AboutMe"

const Home = () => {
    return (
        <div className="home">
            <h2>Akash's Porfoilo</h2>
            <AboutMe />
            <div className="education">
                <h4>Education</h4>
                <p>Bachelor's of Science in Computer Science @ NJIT, Newark NJ</p>
                <p>Associates in Science in Computer Science @ Middlesex College, Edison NJ</p>
            </div>
            <div className="projects">
                <h4>Personal Projects</h4>
                <h6>Airbnb Clone</h6>
                <p>Created a clone of Airbnb, used modern webdev techniques. Clone was made using the MERN stack.</p>
            </div>
            <div className="skillset">
                SPACE FOR SKILL LOGOS
                <Skills />
            </div>
        </div>
    )
}

export default Home