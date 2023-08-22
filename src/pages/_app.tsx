import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Image from 'next/future/image'

import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import { CartContextProvider } from '../contexts/CartContext'
import { Cart } from '../components/Cart'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <CartContextProvider>
      <Container>
        <Header
          justify={router.pathname === '/success' ? 'center' : 'space-between'}
        >
          <Image src={logoImg} alt='' />
          {router.pathname === '/success' ? '' : <Cart />}
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

export default App
