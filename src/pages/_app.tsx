import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import {makeServer} from '../services/mirage'
import { queryClient } from '../services/queryClient'

import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SidebarProvder } from '../contexts/sidebarContext'

if(process.env.NODE_ENV === "development"){
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvder>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarProvder>

      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default MyApp