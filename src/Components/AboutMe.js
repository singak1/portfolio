import { Heading, Text } from "@chakra-ui/react"

const AboutMe = () => {
    return(
        <div className="about-me">
            <Heading as='h4' size='lg' p='4'>About Me</Heading>
            <Text fontSize='lg'>👋🏽 Hi! My name is Akashdeep Singh, I go by Akash. I am currently a senior at NJIT in Newark NJ. I dabbled into a lot of 
                concepts and programming languages and I love to always keep my upto date with new techniques and technologies. My passion
                and majority of my focus in spent in web-dev. I love making fast and responsive websites, I love to see my code build up from
                scratch into a fully fleged website. I enjoy the creative process of designing the layout and functionality of a website.
            </Text>
        </div>
    )
}

export default AboutMe