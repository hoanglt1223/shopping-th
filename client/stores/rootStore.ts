import ProductStore from './productStore'
import UserStore from './userStore'

const isServer = typeof window === 'undefined'

let store: {
  userStore: UserStore
  productStore: ProductStore
} | null = null

export default function initializeStore(this: any) {
  if (isServer) {
    return {
      userStore: new UserStore(this),
      productStore: new ProductStore(this)
    }
  }
  if (store === null) {
    store = {
      userStore: new UserStore(this),
      productStore: new ProductStore(this)
    }
  }

  return store
}
