import { 
    Box, 
    Flex, 
    Heading, 
    Button, 
    Icon,
    useBreakpointValue, 
    Spinner
} from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'
import NextLink from 'next/link'

import useUser from '../../services/hooks/useUser'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Pagination from '../../components/Pagination'
import UsersTable from '../../components/Users/UsersTable'
import { useEffect } from 'react'

const UserList = () => {
    const { data, isLoading, isFetching, error } = useUser

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(()=>{
        
    },[])

    return(
        <Box>
            <Header/>

            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>}
                        </Heading>

                        <NextLink href="/users/create" passHref>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                            >
                                Criar novo
                            </Button>
                        </NextLink>
                    </Flex>

                    { isLoading ? (
                        <Flex align="center" justify="center">
                            <Spinner/>
                        </Flex>
                    ): error ? (
                        <Flex align="center" justify="center">
                            Falha ao obter dados dos usuários
                        </Flex>
                    ) : (
                        <>
                            <UsersTable users={data} isWide={isWideVersion}/>
                    
                            <Pagination/>
                        </>
                    ) }
                </Box>
            </Flex>
        </Box>
    )
}

export default UserList