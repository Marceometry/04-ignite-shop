import Image from 'next/future/image'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '../lib/stripe'
import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import { Bag } from '../assets/Bag'
import { IProduct, useCartContext } from '../contexts/CartContext'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useCartContext()
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  function handleAddToCart(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: IProduct,
  ) {
    e.preventDefault()
    addItem(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className='keen-slider__slide'>
                <Image src={product.imageUrl} width={520} height={480} alt='' />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <button onClick={(e) => handleAddToCart(e, product)}>
                    <Bag />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      priceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}
