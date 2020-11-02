import { action, observable } from 'mobx'
import { signUp, login, updateUser, resetPassword, getUserId } from 'API/user'
import { ILoginDataReq, IUser, ISignUpData } from 'interfaces/user'
import { Router } from 'i18n'
// import { verifyUserPermission } from 'utils/authenticationMartix'

class UserStore {
  rootStore: unknown

  constructor(rootStore: any) {
    this.rootStore = rootStore
  }

  @observable isLoading: boolean = false

  @observable UserDetail: IUser = <IUser>{}

  @observable Users: IUser[] = []


  @action
  public async createUser(user: IUser) {
    this.UserDetail = await signUp(user)
  }

  @action
  public async login(loginData: ILoginDataReq) {
    this.isLoading = true
    const response = await login(loginData)
    if (response) {
      const { token } = response
      localStorage.setItem('token', JSON.stringify(token))
      this.isLoading = false
      Router.push('/shopping')
      getUserId().then(id => {
        localStorage.setItem('userId', JSON.stringify(id))
            })
    } else {
      this.isLoading = false
      const errors = response
      return errors
    }
    return 0
  }

  @action
  public async signUp(signUpData: ISignUpData) {
    this.isLoading = true
    const response = await signUp(signUpData)
    if (response) {
      const { token } = response
      localStorage.setItem('token', JSON.stringify(token))
      this.isLoading = false
      console.log(response)
    } else {
      this.isLoading = false
      const errors = response
      return errors
    }
  }

  @action
  public getToken() {
    return localStorage.getItem('token')
  }

  @action
  public async updateProfile(id: string, userData: Omit<IUser, 'id'>): Promise<void> {
    this.isLoading = true
    const error = await updateUser(id, userData)
    if (error) {
      throw error
    }
    this.isLoading = false
  }

  @action
  public async resetPassword(email: string, newPassword: string): Promise<void> {
    this.isLoading = true
    const error = await resetPassword(email, newPassword)
    if (error) {
      this.isLoading = false
      throw error
    }
    this.isLoading = false
  }

  @action
  public logout() {
    localStorage.setItem('token', '')
  }
}

export default UserStore