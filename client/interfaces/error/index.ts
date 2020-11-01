export interface IServerError {
  statusCode: number
  name: string
  message: string
  code?: string
  details?: IErrorDetails[]
}

interface IErrorDetails {
  code: string
  info: IErrorInfo
  message: string
  path: string
}

interface IErrorInfo {
  missingProperty: string
}
