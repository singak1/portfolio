import { Heading, Text, Image, Box } from "@chakra-ui/react"

const AboutMe = () => {
    return(
        <div className="about-me">
            <Heading as='h4' size='lg' p='2'>About Me</Heading>
            <Box m='auto' display='flex' flexDirection={['column', 'column', 'column', 'row']} alignItems='center' w={['100%', '75%', '75%', '55%']}> 
                <Box mr='4'>       
                    <Image src="/images/IMG_3257.jpeg" alt="Akashdeep Singh" borderRadius='full' boxSize={['200px', '3xs', '2xs']} fit='cover'/>
                </Box>
                <Box w={['100%', '100%', '100%' ,'75%']}>
                <Text fontSize='lg'>👋🏽 Hi! My name is Akashdeep Singh, I go by Akash. I am currently a senior at NJIT in Newark NJ. I dabbled into a lot of 
                concepts and programming languages and I love to always keep myself upto date with new techniques and technologies. My passion
                and majority of my focus in spent in web-dev. I love making fast and responsive websites and seeing my code build up from
                scratch into a fully fleged website. I enjoy the creative process of designing the layout and functionality of a website.
                </Text>
                </Box>
            </Box>
        </div>
    )
}

export default AboutMe