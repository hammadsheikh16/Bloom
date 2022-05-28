import '../styles/globals.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
      <>

          <ChakraProvider>
              <html>
                  <Component {...pageProps} />
              </html>
          </ChakraProvider>
      </>

      )
}

export default MyApp
