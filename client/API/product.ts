import get from 'lodash/get'

import { api, errorHandler } from 'API'

export async function getProducts(): Promise<any[]> {
    try {
      const { data } = await api.get('/products')
      return data
    } catch (err) {
      const error = get(err, 'response.data.error', '')
      errorHandler(error)
      throw error
    }
  }