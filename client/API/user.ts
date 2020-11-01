import get from 'lodash/get'

import { api, errorHandler } from 'API'
import { ILoginDataReq, ILoginDataRes, IUser } from 'interfaces/user'
import { IServerError } from 'interfaces/error'

export async function signUp(user: IUser): Promise<IUser> {
  try {
    const { data } = await api.post('/users', user)
    return data
  } catch (err) {
    const error = get(err, 'response.data.error', '')
    errorHandler(error)
    throw error
  }
}

export async function login(user: ILoginDataReq): Promise<ILoginDataRes> {
  try {
    const { data } = await api.post('/users/login', user)
    return data
  } catch (err) {
    const error = get(err, 'response.data.error', '')
    errorHandler(error)
    throw error
  }
}

export async function updateUser(id: string, user: Omit<IUser, 'id'>): Promise<IUser> {
  try {
    const { data } = await api.put(`/users/${id}`, user)
    return data
  } catch (err) {
    const error = get(err, 'response.data.error', '')
    errorHandler(error)
    throw error
  }
}


export async function resetPassword(email: string, newPassword: string): Promise<undefined | IServerError> {
  try {
    const data = {
      email,
      newPassword
    }
    await api.patch(`/users/password-reset`, data)
    return undefined
  } catch (err) {
    errorHandler(err.response.data.error)
    return err.response.data.error
  }
}
