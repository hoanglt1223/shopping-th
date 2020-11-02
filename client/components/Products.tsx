import { useEffect, useState } from 'react'
import { useShoppingCart, Product } from 'use-shopping-cart'
import useStores from 'utils/useStore'

const Products = () => {
  const { addItem, removeItem } = useShoppingCart()
  const {productStore} = useStores()
  const [productsData,setProductsData] = useState(productStore.productList)
  useEffect(() => { 
    async function fetchProductData() {
      await productStore.loadProducts()
      setProductsData(productStore.productList)
    }
    fetchProductData()
  }, [])
  return (
    <section className="products">
      {productsData.map((product: Product, index:number) => (
        <div key={index} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <h4>{product.description}</h4>
          <h5>{product.detail}</h5>
          <p className="price">{product.price}</p>
          <button className="cart-style-background" onClick={() => {addItem(product);console.log(product.productId)}}>Add to cart</button>
          <button className="cart-style-background" onClick={() => removeItem(product.id)} >Remove</button>
        </div>
      ))}
    </section>
  )
}

export default Products
