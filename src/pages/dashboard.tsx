import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'


import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import Chart from '../components/Chart'
import { RiBarChartLine } from 'react-icons/ri';

export default function Dashboard(){

    return(
        <Flex
            direction="column" 
            h="100vh"
        >
            <Header>
                <h1>Hello world</h1>
            </Header>

            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar/>

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius="8px"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart/>
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius="8px"
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart/>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}