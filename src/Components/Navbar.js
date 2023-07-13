import { Link } from "react-router-dom"
import { Tooltip, IconButton, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react"
import { BsSunFill, BsMoonFill } from "react-icons/bs"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' padding='4' borderBottom='2px' borderBottomColor='GrayText' position='sticky' top='0' backdropFilter='blur(6px)'>
            <Link to="/"><Heading as='h4' size='md' mr="4">Home</Heading></Link>
            <Link to="/contact"><Heading as='h4' size='md'>Contact</Heading></Link>
            <Spacer />
            <Tooltip label='Toggle Dark Mode'>
                <IconButton onClick={toggleColorMode}
                    borderRadius='30'
                    fontSize='20'
                    icon={colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
                />
            </Tooltip>
        </Flex>
    )
}

export default Navbar