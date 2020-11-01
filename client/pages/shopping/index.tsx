import { NextPage } from 'next'
import Layout from '../../components/WebsiteLayout'

import Cart from '../../components/Cart'
import CartSummary from '../../components/CartSummary'
import Products from '../../components/Products'

const DonatePage: NextPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <Cart>
          <CartSummary />
          <Products />
        </Cart>
      </div>
    </Layout>
  )
}

export default DonatePage
