import React, { ReactNode } from 'react'
import { Stripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

let stripePromise: Promise<Stripe | null>

const Cart = ({ children }: { children: ReactNode }) => (
  <CartProvider
    mode="checkout-session"
    stripe={stripePromise}
    currency='usd'
  >
    <>{children}</>
  </CartProvider>
)

export default Cart
