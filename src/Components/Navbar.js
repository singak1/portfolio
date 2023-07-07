import { Link } from "react-router-dom"
import { Tooltip, IconButton, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react"
import { CgDarkMode } from "react-icons/cg"

const Navbar = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' padding='4' borderBottom='2px' borderBottomColor='GrayText'>
            <Link to="/"><Heading as='h4' size='md' mr="4">Home</Heading></Link>
            <Link to="/contact"><Heading as='h4' size='md'>Contact</Heading></Link>
            <Spacer />
            <Tooltip label='Toggle Dark Mode'><IconButton onClick={toggleColorMode}
                borderRadius='30'
                fontSize='30'
                icon={<CgDarkMode />}
            /></Tooltip>
        </Flex>
    )
}

export default Navbar