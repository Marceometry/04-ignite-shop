import { AppProps } from 'next/app'
import Image from 'next/future/image'

import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import { CartContextProvider } from '../contexts/CartContext'
import { Cart } from '../components/Cart'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt='' />
          <Cart />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

export default App
