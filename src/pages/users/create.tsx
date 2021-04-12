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
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Input from '../../components/Form/Input'
import { useCallback } from 'react'

interface createUserData {
    name: string
    email: string,
    password: string
    password_confirmation: string
  }
  
  const createUserFormSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: Yup.string().min(6, 'A senha precisa ter pelo menos 6 caracteres'),
    password_confirmation: Yup.string().oneOf([
        null, Yup.ref('password')
    ], 'As senhas precisam ser iguais')
  })

const UserList = () => {

const { register, handleSubmit, formState, formState:  { errors } } = useForm({
    resolver: yupResolver(createUserFormSchema)
})
    
    const handleCreateUser: SubmitHandler<createUserData> = useCallback((value)=>{

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

            <Box 
                as="form"
                flex="1" 
                borderRadius={8} 
                bg="gray.800" 
                p="8"
                onSubmit={handleSubmit(handleCreateUser)}
            >
                <Heading size="lg" fontWeight="normal">
                    Criar usuário
                </Heading>

                <Divider my="6" borderColor="gray.700"/>

                <VStack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                        <Input 
                            name="name" 
                            label="Nome completo" 
                            {...register("name")}
                            error={errors.name}
                        />
                        <Input 
                            name="email" 
                            label="E-mail" 
                            type="email"
                            {...register("email")}
                            error={errors.email}
                        />
                    </SimpleGrid>
                    <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                        <Input 
                            name="password" 
                            label="Senha" 
                            type="password"
                            {...register("password")}
                            error={errors.password}
                        />
                        <Input 
                            name="password_confirmation" 
                            label="Confirme a senha" 
                            type="password"
                            {...register("password_confirmation")}
                            error={errors.password_confirmation}
                        />
                    </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                        <NextLink href="/users" passHref>
                            <Button colorScheme="whiteAlpha">
                                Cancelar
                            </Button>
                        </NextLink>
                        <Button 
                            type="submit" 
                            colorScheme="pink" 
                            isLoaging={formState.isSubmitting}
                        >
                            Salvar
                        </Button>
                    </HStack>
                </Flex>
            </Box>
        </Flex>
    </Box>
)
}

export default UserList