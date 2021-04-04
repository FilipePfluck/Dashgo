import {
    Table, 
    Thead, 
    Tr, 
    Th, 
    Td,
    Checkbox, 
    Tbody, 
    Text,
    Box,
    Button, 
    Icon
} from '@chakra-ui/react'

import { RiPencilLine } from 'react-icons/ri'

import EditButton from './EditButton'

interface UsersTableProps {
    isWide?: boolean
}

const UsersTable: React.FC<UsersTableProps> = ({isWide=true}) => {
    return(
        <Table colorScheme="whiteAlpha">

            <Thead>
                <Tr>
                    <Th px={["4","4","6"]} color="gray.300" width="8">
                        <Checkbox colorScheme="pink"/>
                    </Th>
                    <Th> Usuário </Th>
                    {isWide && <Th> Data de cadastro </Th>}
                    {isWide && <Th width="6"></Th>}
                </Tr>
            </Thead>

            <Tbody>
                <Tr>
                    <Td px={["4","4","6"]}> 
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
                    {isWide && (<Td> 
                        <Text>04 de Abril, 2021</Text>
                    </Td>)}
                    {isWide && (<Td>
                        <EditButton>
                            Editar
                        </EditButton>
                    </Td>)}
                </Tr>

                <Tr>
                    <Td px={["4","4","6"]}> 
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
                    {isWide && (<Td> 
                        <Text>04 de Abril, 2021</Text>
                    </Td>)}
                    {isWide && (<Td>
                        <EditButton>
                            Editar
                        </EditButton>
                    </Td>)}
                </Tr>

                <Tr>
                    <Td px={["4","4","6"]}> 
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
                    {isWide && (<Td> 
                        <Text>04 de Abril, 2021</Text>
                    </Td>)}
                    {isWide && (<Td>
                        <EditButton>
                            Editar
                        </EditButton>
                    </Td>)}
                </Tr>

                <Tr>
                    <Td px={["4","4","6"]}> 
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
                    {isWide && (<Td> 
                        <Text>04 de Abril, 2021</Text>
                    </Td>)}
                    {isWide && (<Td>
                        <EditButton>
                            Editar
                        </EditButton>
                    </Td>)}
                </Tr>
            </Tbody>
        </Table>
    )
}

export default UsersTable