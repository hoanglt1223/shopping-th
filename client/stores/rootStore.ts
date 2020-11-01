// import { useStaticRendering } from 'mobx-react'
import UserStore from './userStore'

const isServer = typeof window === 'undefined'
// useStaticRendering(isServer)

let store: {
  // Intranet stores
  userStore: UserStore
} | null = null

export default function initializeStore() {
  if (isServer) {
    return {
      userStore: new UserStore()
    }
  }
  if (store === null) {
    store = {
      // Intranet stores
      userStore: new UserStore()
    }
  }

  return store
}
