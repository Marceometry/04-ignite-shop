import { useState } from 'react'
import Image from 'next/future/image'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {
  DrawerTrigger,
  DrawerContent,
  DrawerCloseButton,
  CartProductList,
  ImageContainer,
  ProductInfo,
  QuantityNotification,
  CartSummary,
  CheckoutButton,
  EmptyBag,
} from '../styles/components/cart'
import { Bag } from '../assets/Bag'
import { X } from '../assets/X'
import { useCartContext } from '../contexts/CartContext'
import axios from 'axios'

export const Cart = () => {
  const { products, removeItem, totalValue } = useCartContext()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        // priceId: products.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <div>
      <DrawerTrigger>
        <button onClick={toggleDrawer}>
          <Bag size={24} />
        </button>
        {!!products.length && (
          <QuantityNotification>{products.length}</QuantityNotification>
        )}
      </DrawerTrigger>

      <Drawer open={isOpen} onClose={toggleDrawer} direction='right' size={480}>
        <DrawerContent>
          <DrawerCloseButton onClick={toggleDrawer}>
            <X />
          </DrawerCloseButton>

          <strong>Sacola de compras</strong>

          {products.length ? (
            <>
              <CartProductList>
                <ul>
                  {products.map((product) => (
                    <li key={product.id}>
                      <ImageContainer>
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          width={90}
                          height={90}
                        />
                      </ImageContainer>
                      <ProductInfo>
                        <div>
                          <span>{product.name}</span>
                          <strong>{product.price}</strong>
                        </div>
                        <button onClick={() => removeItem(product.id)}>
                          Remover
                        </button>
                      </ProductInfo>
                    </li>
                  ))}
                </ul>
              </CartProductList>

              <CartSummary>
                <div>
                  <span>Quantidade</span>
                  <strong>Valor total</strong>
                </div>
                <div>
                  <span>
                    {products.length === 1
                      ? `${products.length} item`
                      : `${products.length} itens`}
                  </span>
                  <strong>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(totalValue)}
                  </strong>
                </div>
              </CartSummary>

              <CheckoutButton
                disabled={isCreatingCheckoutSession}
                onClick={handleBuyButton}
              >
                Finalizar compra
              </CheckoutButton>
            </>
          ) : (
            <EmptyBag>
              <p>Sua sacola está vazia</p>
            </EmptyBag>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  )
}
