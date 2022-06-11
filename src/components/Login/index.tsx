import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimesSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import useTheme from '../../hooks/useTheme'
import { ILogin } from '../../interfaces/ILogin'
import { themes } from '../../themes'
import { ModalBGTheme } from '../../types/Theme'
import ModalBG from '../ModalBG'
import {
  StyledLogin,
  StyledLoginHeader,
  StyledLoginHeaderTitle,
} from './styled'

const Login: React.FC<ModalBGTheme> = ({ onClose }) => {
  const { theme } = useTheme()
  const { login } = useAuth();
  const [user, setUser] = useState<ILogin>({
    email: 'admin@admin.com',
    password: 'Umbreon@197',
    rememberMe: true,
  })

  return (
    <>
      <ModalBG background onClose={onClose} />
      <StyledLogin theme={themes[theme]}>
        <StyledLoginHeader theme={themes[theme]}>
          <StyledLoginHeaderTitle theme={themes[theme]}>
            Login
          </StyledLoginHeaderTitle>
          <StyledLoginHeaderTitle theme={themes[theme]} onClick={onClose}>
            <FontAwesomeIcon cursor="pointer" icon={faTimesCircle} />
          </StyledLoginHeaderTitle>
        </StyledLoginHeader>
        <button onClick={() => login(user)}>login</button>
      </StyledLogin>
    </>
  )
}

export default Login
