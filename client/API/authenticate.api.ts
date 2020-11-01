import { IUserResponse, IUserRequest } from "../interfaces/user";
import { errorHandler, api } from '.'

export async function login(loginData: IUserRequest): Promise<IUserResponse> {
  try {
    const response = await api.post('/users/login', loginData)
    return response.data
  } catch (err) {
    errorHandler(err.response.data.error)
    return err.response.data.error
  }
}