import '../styles/globals.css'
import { Box } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
      <>
          <Component {...pageProps} />
      </>
  )
}

export default MyApp
