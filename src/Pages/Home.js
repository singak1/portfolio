import Skills from "../Components/Skills"
import AboutMe from "../Components/AboutMe"
import { Heading, Text } from "@chakra-ui/react"

const Home = () => {
    return (
        <div className="home">
            <Heading as='h2' size='lg'>Akash's Porfoilo</Heading>
            <AboutMe />
            <Heading as='h4' size='lg' pt='4'>Education</Heading>
            <Text fontSize='lg'>Bachelor's of Science in Computer Science @ NJIT, Newark NJ</Text>
            <Text fontSize='lg'>Associates in Science in Computer Science @ Middlesex College, Edison NJ</Text>

            <Heading as='h4' size='lg' p='4'>Personal Projects</Heading>
            <Heading as='h6' size='md'>Airbnb Clone</Heading>
            <p>Created a clone of Airbnb, used modern webdev techniques. Clone was made using the MERN stack.</p>
            <div className="skillset">
                SPACE FOR SKILL LOGOS
                <Skills />
            </div>
        </div>
    )
}

export default Home