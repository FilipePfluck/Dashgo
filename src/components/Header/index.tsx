import { Flex, Text } from '@chakra-ui/react'

import Profile from './Profile'
import NotificationsNav from './NotificationsNav'
import Searchbox from './SearchBox'

const Header: React.FC = ()=>{ 
    return(
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tighgt" w="64">
                dashgo
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>

            <Searchbox/>

            <Flex
                align="center"
                ml="auto"
            >  
                
                <NotificationsNav/>
                <Profile/>
            </Flex>
        </Flex>
    )
}

export default Header