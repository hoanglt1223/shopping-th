import { action, observable } from 'mobx'
import {signUp, login, updateUser, resetPassword} from 'API/user'
import { ILoginDataReq, IUser, ISignUpData } from 'interfaces/user'
// import { verifyUserPermission } from 'utils/authenticationMartix'

class UserStore {
  rootStore: unknown

  constructor(rootStore:any) {
    this.rootStore = rootStore
  }

  @observable isLoading: boolean = false

  @observable UserDetail: IUser = <IUser>{}

  @observable Users: IUser[] = []


  @action
  public async createUser(user: IUser){
    this.UserDetail = await signUp(user)
  }

  @action
  public async login(loginData: ILoginDataReq) {
    this.isLoading = true
    console.log('123')
    const response = await login(loginData)
    if (response) {
      const {token} = response
          localStorage.setItem('token', JSON.stringify(token))
          this.isLoading = false
      } else {
        this.isLoading = false
        const errors = response
        return errors
      }
      return 0
    }


  // constructor() {
  //   makeObservable(this)
  // }
  // @action setdata = (value: string, name: string) => {
  //   if (name === 'email') {
  //     this.email = value
  //   }
  //   else if (name === 'password') {
  //     this.password = value
  //   }
  // }

  @action
  public async signUp(signUpData: ISignUpData) {
    this.isLoading = true
    const response = await signUp(signUpData)
    if (response) {
      const {token} = response
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