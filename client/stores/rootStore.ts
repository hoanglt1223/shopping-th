import UserStore from './userStore'

const isServer = typeof window === 'undefined'

let store: {
  userStore: UserStore
} | null = null

export default function initializeStore(this: any) {
  if (isServer) {
    return {
      userStore: new UserStore(this)
    }
  }
  if (store === null) {
    store = {
      userStore: new UserStore(this)
    }
  }

  return store
}
