import Skills from "../Components/Skills"
import AboutMe from "../Components/AboutMe"
import { Heading, Stack, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import Navbar from "../Components/Navbar"

const Home = () => {
    useEffect(() => {
        document.title = "Akash's Portfolio"
    }, [])

    return (
        <div className="home">
            <Navbar />
            <div className="home-content" >
                <Stack w={['100%', '75%', '50%']} alignContent='space-around' m='auto'>
                <Heading as='h2' size='lg' p='2'>Akash's Porfoilo</Heading>
                <AboutMe />
                <Heading as='h4' size='lg' pt='4'>Education</Heading>
                <Text fontSize='lg'>Bachelor's of Science in Computer Science @ NJIT, Newark NJ</Text>
                <Text fontSize='lg'>Associates in Science in Computer Science @ Middlesex College, Edison NJ</Text>

                <Heading as='h4' size='lg' p='4'>Personal Projects</Heading>
                <Heading as='h6' size='md'>Airbnb Clone</Heading>
                <p>Created a clone of Airbnb, used modern webdev techniques. Clone was made using the MERN stack.</p>
                <Skills />
                </Stack>
            </div>
        </div>
    )
}

export default Home