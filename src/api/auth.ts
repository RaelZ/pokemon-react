import { ILogin } from '../interfaces/ILogin'
import { apiRequest } from './config'

export const LOGIN = async (data: ILogin) => {
  const result = 
    await apiRequest
      .post('auth', data)
      .then((res) => res.data)
      .catch((err) => console.log(err))

  return result
}
