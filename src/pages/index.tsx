import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { useCallback } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Input from '../components/Form/Input'

interface SigninData {
  email: string,
  password: string
}

const signinFormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: Yup.string().required('Senha obrigatória')
})

export default function Home() {
  const { register, handleSubmit, formState, formState:  { errors } } = useForm<SigninData>({
    resolver: yupResolver(signinFormSchema)
  })

  const handleSignin: SubmitHandler<SigninData> = useCallback((values)=>{
    console.log(values)
  },[])

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing="4">
            <Input 
              name="email"
              label="E-Mail"
              type="email"
              {...register("email")}
              error={errors.email}
            />
            <Input 
              name="password"
              label="Senha"
              type="password"
              {...register("password")}
              error={errors.password}
            />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        > 
          Entrar 
        </Button>
      </Flex>
    </Flex>
  )
}
