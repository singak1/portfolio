import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si"
import { Flex, Icon, Tooltip } from "@chakra-ui/react"

const Skills = () => {
    return(
        <Flex maxWidth='max-content' alignContent='space-between' margin='auto'>
            <Tooltip label='Express'><span><Icon as={SiExpress} boxSize={8} mr={3}/></span></Tooltip>
            <Tooltip label='Mongo DB'><span><Icon as={SiMongodb} boxSize={8} mr={3}/></span></Tooltip>
            <Tooltip label='NodeJS'><span><Icon as={SiNodedotjs} boxSize={8} mr={3}/></span></Tooltip>
            <Tooltip label='React'><span><Icon as={SiReact} boxSize={8} mr={3}/></span></Tooltip>
        </Flex>
    )
}

export default Skills