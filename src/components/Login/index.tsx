import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimesSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useTheme from '../../hooks/useTheme'
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

  return (
    <>
      <ModalBG background onClose={onClose} />
      <StyledLogin theme={themes[theme]}>
        <StyledLoginHeader theme={themes[theme]}>
          <StyledLoginHeaderTitle theme={themes[theme]}>
            Login
          </StyledLoginHeaderTitle>
          <StyledLoginHeaderTitle
            theme={themes[theme]}
            onClick={onClose}
          >
            <FontAwesomeIcon cursor="pointer" icon={faTimesCircle} />
          </StyledLoginHeaderTitle>
        </StyledLoginHeader>
      </StyledLogin>
    </>
  )
}

export default Login
