import { Icon, Stack, Text, VStack, HStack, Link } from "@chakra-ui/react";
import { BsFillHeartFill, BsGithub, BsLinkedin } from "react-icons/bs"
import { SiVercel } from "react-icons/si";

const Footer = () => {
    return(
        <Stack>
            <VStack minWidth='max-content' alignContent='center'>
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
                    <Text fontSize='sm' as='b' borderRadius='5' backgroundColor='black' color='white' padding='2' mt='5'>Deployed on <Icon as={SiVercel} color='white' /> Vercel</Text>
                </HStack>
            </VStack>
        </Stack>
    )
}

export default Footer