import React from 'react'
import { ModalBGTheme } from '../../types/Theme'
import { StyledModalBG } from './styled'

const ModalBG: React.FC<ModalBGTheme> = ({ theme, onClose }) => {
  return <StyledModalBG theme={theme} onClick={onClose} />
}

export default ModalBG
