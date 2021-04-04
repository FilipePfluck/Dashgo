import {
Box, 
Flex, 
Heading, 
Divider,
VStack,
HStack,
Button,
SimpleGrid
} from '@chakra-ui/react'
import NextLink from 'next/link'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Input from '../../components/Form/Input'

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
                <Heading size="lg" fontWeight="normal">
                    Criar usuário
                </Heading>

                <Divider my="6" borderColor="gray.700"/>

                <VStack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                        <Input name="name" label="Nome completo"/>
                        <Input name="email" label="E-mail" type="email"/>
                    </SimpleGrid>
                    <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                        <Input name="password" label="Senha" type="password"/>
                        <Input name="password_confirmation" label="Confirme a senha" type="password"/>
                    </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                        <NextLink href="/users" passHref>
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                        </NextLink>
                        <Button colorScheme="pink">Salvar</Button>
                    </HStack>
                </Flex>
            </Box>
        </Flex>
    </Box>
)
}

export default UserList