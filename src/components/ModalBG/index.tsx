import React from 'react'
import { ModalBGTheme } from '../../types/Theme'
import { StyledModalBG } from './styled'

const ModalBG: React.FC<ModalBGTheme> = ({ background, onClose }) => {
  return <StyledModalBG background={background} onClick={onClose} />
}

export default ModalBG
