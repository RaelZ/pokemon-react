import { ILogin } from '../interfaces/ILogin'

export type Token = string
export type AuthContextType = {
  token: string
  login: (data: ILogin) => void
}
