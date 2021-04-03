import { 
    Box, 
    Flex, 
    Heading, 
    Button, 
    Icon, 
    Table, 
    Thead, 
    Tr, 
    Th, 
    Td,
    Checkbox, 
    Tbody, 
    Text 
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Pagination from '../../components/Pagination'

const UserList = () => {
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
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                    
                        <Button 
                            as="a" 
                            size="sm" 
                            fontSize="sm" 
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th> Usuário </Th>
                                <Th> Data de cadastro </Th>
                                <Th width="6"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6"> 
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td> 
                                    <Box>
                                        <Text fontWeight="bold">
                                            Diego Fernandes
                                        </Text>
                                        <Text sontSize="sm" color="gray.300">
                                            diego.schell.f@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td> 
                                    <Text>04 de Abril, 2021</Text>
                                </Td>
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="whiteAlpha"
                                        leftIcon={<Icon as={RiPencilLine}/>}
                                        ml="auto"
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px="6"> 
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td> 
                                    <Box>
                                        <Text fontWeight="bold">
                                            Diego Fernandes
                                        </Text>
                                        <Text sontSize="sm" color="gray.300">
                                            diego.schell.f@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td> 
                                    <Text>04 de Abril, 2021</Text>
                                </Td>
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="whiteAlpha"
                                        leftIcon={<Icon as={RiPencilLine}/>}
                                        ml="auto"
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px="6"> 
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td> 
                                    <Box>
                                        <Text fontWeight="bold">
                                            Diego Fernandes
                                        </Text>
                                        <Text sontSize="sm" color="gray.300">
                                            diego.schell.f@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td> 
                                    <Text>04 de Abril, 2021</Text>
                                </Td>
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="whiteAlpha"
                                        leftIcon={<Icon as={RiPencilLine}/>}
                                        ml="auto"
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px="6"> 
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td> 
                                    <Box>
                                        <Text fontWeight="bold">
                                            Diego Fernandes
                                        </Text>
                                        <Text sontSize="sm" color="gray.300">
                                            diego.schell.f@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td> 
                                    <Text>04 de Abril, 2021</Text>
                                </Td>
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="whiteAlpha"
                                        leftIcon={<Icon as={RiPencilLine}/>}
                                        ml="auto"
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}

export default UserList