import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import { SidebarProvder } from '../contexts/sidebarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvder>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SidebarProvder>
  )
}

export default MyApp