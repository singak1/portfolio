import { Icon, Text, VStack, HStack, Link } from "@chakra-ui/react";
import { BsFillHeartFill, BsGithub, BsLinkedin } from "react-icons/bs"
import { SiVercel } from "react-icons/si";

const Footer = () => {
    return(
            <VStack minWidth='max-content' alignContent='center' gap='6' mt='10'>
                <HStack>
                    <Text>Proudly made with</Text>
                    <Icon as={BsFillHeartFill} color='red.500'/>
                    <Text>by Akash</Text>
                </HStack>
                <HStack gap='4'>
                    <Link href="https://github.com/singak1" isExternal><Icon as={BsGithub} boxSize={6} color='gray.400'/></Link>
                    <Link href="https://www.linkedin.com/in/singak1/" isExternal><Icon as={BsLinkedin} boxSize={6} color='gray.400'/></Link>
                </HStack>
                <HStack mb={2}>
                    <Text fontSize='sm' as='b' borderRadius='5' backgroundColor='black' color='white' padding='2'>Deployed on <Icon as={SiVercel} color='white' /> Vercel</Text>
                </HStack>
            </VStack>
    )
}

export default Footer