import { getProducts } from 'API/product'
import { observable, action } from 'mobx'
class ProductStore {
  @observable productList = [{}]
  rootStore: unknown

  constructor(rootStore: unknown) {
    this.rootStore = rootStore
  }
  @action 
  public async loadProducts() {
    await getProducts().then(data => {
        console.log(data)
        return this.productList = data
    })
    return 0
  }

}
export default ProductStore
