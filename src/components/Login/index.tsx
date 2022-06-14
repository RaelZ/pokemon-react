import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import useTheme from '../../hooks/useTheme'
import { ILogin } from '../../interfaces/ILogin'
import { ModalBGTheme } from '../../types/Theme'
import ModalBG from '../ModalBG'
import ModalButtons from '../ModalButtons'
import ModalHeader from '../ModalHeader'
import RoundButton from '../RoundButton'
import { StyledLogin } from './styled'

const Login: React.FC<ModalBGTheme> = ({ onClose }) => {
  const { activeTheme } = useTheme()
  const { login } = useAuth()
  const [user, setUser] = useState<ILogin>({
    email: 'admin@admin.com',
    password: 'Umbreon@197',
    rememberMe: true,
  })

  return (
    <>
      <ModalBG background onClose={onClose} />
      <StyledLogin theme={activeTheme}>
        <ModalHeader title="login" onClose={onClose} />
        <ModalButtons />
      </StyledLogin>
    </>
  )
}

export default Login
