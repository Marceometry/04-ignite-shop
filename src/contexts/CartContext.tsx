import { createContext, useContext, useState, ReactNode } from 'react'

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  priceId: string
}

export type CartContextData = {
  products: IProduct[]
  addItem: (item: IProduct) => void
  removeItem: (id: string) => void
  totalValue: number
}

export type CartContextProviderProps = {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<IProduct[]>([])

  const totalValue = products.reduce((acc, product) => {
    const price = product.price.slice(2).replace(',', '').replace('.', '')
    const value = parseFloat(price) / 100
    return acc + value
  }, 0)

  function addItem(item: IProduct) {
    setProducts((state) => {
      if (state.find((i) => i.id === item.id)) return state
      return [...state, item]
    })
  }

  function removeItem(id: string) {
    setProducts((state) => state.filter((i) => i.id !== id))
  }

  return (
    <CartContext.Provider value={{ products, addItem, removeItem, totalValue }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
