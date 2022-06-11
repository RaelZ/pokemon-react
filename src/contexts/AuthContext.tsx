import React, { createContext, FC } from 'react'
import { Token, AuthContextType } from '../types/Auth'
import { Children } from '../types/Children'
import { LOGIN } from '../api/auth'
import { ILogin } from '../interfaces/ILogin'

export const AuthContext = createContext<AuthContextType>({
  token: '',
  login: (data: ILogin) => {},
})

const AuthProvider: FC<Children> = ({ children }) => {
  const [token, setToken] = React.useState<Token>('')

  const login = async (data: ILogin) => await LOGIN(data).then(res => setToken(res))

  return (
    <AuthContext.Provider value={{ token, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
