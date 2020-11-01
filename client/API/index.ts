import axios from 'axios'
import { IServerError } from 'interfaces/error'
import {Router} from 'i18n'
import routes from '../routes'

const { API_URL } = {API_URL : 'https://shoppingth.herokuapp.com/api'}

export const api = axios.create({
  baseURL: API_URL
})

export function auth() {
  const accessToken = getAccessToken()
  return { Authorization: `Bearer ${accessToken}` }
}

export function errorHandler(error: IServerError) {
  switch (error.statusCode) {
    case 401:
      {
        if ( error.message === 'Error verifying token : jwt expired') {
          setAccessToken('')
          Router.push(routes.login.value)
          Router.reload()
          alert('Your access token expires, please login again')
        } else {
          alert('You are unauthorized to access')
        }
      }
      break
  }
}

export function getAccessToken(): string {
  return localStorage.getItem('accessToken') || ''
}

export function setAccessToken(token: string = '') {
  localStorage.setItem('accessToken', token)
}