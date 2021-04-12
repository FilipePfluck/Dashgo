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

interface User {
    id: number,
    name: string
    email: string
    createdAt: string
}

interface UsersTableProps {
    isWide?: boolean
    users: User[]
}

const UsersTable: React.FC<UsersTableProps> = ({isWide=true, users}) => {
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
                {users.map(user => (
                    <Tr key={user.id}>
                        <Td px={["4","4","6"]}> 
                            <Checkbox colorScheme="pink"/>
                        </Td>
                        <Td> 
                            <Box>
                                <Text fontWeight="bold">
                                    {user.name}
                                </Text>
                                <Text sontSize="sm" color="gray.300">
                                    {user.email}
                                </Text>
                            </Box>
                        </Td>
                        {isWide && (<Td> 
                            <Text>{user.createdAt}</Text>
                        </Td>)}
                        {isWide && (<Td>
                            <EditButton>
                                Editar
                            </EditButton>
                        </Td>)}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default UsersTable