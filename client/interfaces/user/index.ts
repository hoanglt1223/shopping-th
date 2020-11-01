export interface IUser {
  id?: string
  email: string
  roles?: RoleEnum[]
  name?: string
  phoneNumber?: string
  isInactive?: boolean
  avatar?: string
  userCredentials?: string
  chatMessages?: string
  userChatChannels?: string
}

export enum RoleEnum {
  ADMIN = 'admin',
  OPERATOR = 'operator',
  CUSTOMER = 'customer'
}
export interface IUserRequest {

}

export interface IUserResponse {

}