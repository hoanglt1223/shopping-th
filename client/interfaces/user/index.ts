export interface IUser {
  id?: string
  email: string
  password: string
  roles?: RoleEnum[]
  name?: string
  address?: string
  phoneNumber?: string
  isInactive?: boolean
  avatar?: string
  token? :string | undefined
}

export enum RoleEnum {
  ADMIN = 'admin',
  OPERATOR = 'operator',
  CUSTOMER = 'customer'
}

export interface ILoginDataReq {
  email: string
  password: string
}

export interface ILoginDataRes {
  token: string
  // role?:RoleEnum[]
}


export interface ISignUpData {
  name?: string
  phoneNumber?: string
  email: string
  password: string
  address?: string
}