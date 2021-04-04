import { Flex, Icon, Text, useBreakpointValue, IconButton } from '@chakra-ui/react'

import Profile from './Profile'
import NotificationsNav from './NotificationsNav'
import Searchbox from './SearchBox'
import { useSidebar } from '../../contexts/sidebarContext'
import { RiMenuLine } from 'react-icons/ri'

const Header: React.FC = ()=>{ 
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const { onOpen } = useSidebar()

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
            {!isWideVersion && (
                <IconButton
                    aria-label="Open navigator"
                    icon={<Icon as={RiMenuLine}/>}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                />
            )}

            <Text 
                fontSize={["2xl","3xl"]} 
                fontWeight="bold" 
                letterSpacing="tighgt" 
                w="64"
            >
                dashgo
                <Text 
                    as="span" 
                    ml="1" 
                    color="pink.500"
                >
                    .
                </Text>
            </Text>

            {isWideVersion && <Searchbox/>}

            <Flex
                align="center"
                ml="auto"
            >  
                
                <NotificationsNav/>
                <Profile isWide={isWideVersion}/>
            </Flex>
        </Flex>
    )
}

export default Header