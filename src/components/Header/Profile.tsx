import { Flex, Box, Text, Avatar } from '@chakra-ui/react'


const Profile = ()=>{
    return(
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Diego Fernandes</Text>
                <Text color="gray.300" fontSize="small">
                    diego.schell.f@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Diego Fernandes" src="https://github.com/diego3g.png"/>
        </Flex>
    )
}

export default Profile