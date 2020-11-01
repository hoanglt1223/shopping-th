import { observable } from 'mobx'
import { IUserRequest, IUser } from 'interfaces/user'

class UserStore {
  @observable
  users: IUser[] = []

  @observable
  user: IUser = {
    email: 'email-test'
  }
}

export default UserStore
