import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useTheme from '../../hooks/useTheme'
import { ModalHeaderProps } from '../../types/Modal'
import {
  StyledCloseButton,
  StyledModalHeader,
  StyledModalHeaderTitle,
} from './styled'

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  const { activeTheme } = useTheme()

  return (
    <StyledModalHeader theme={activeTheme}>
      <StyledModalHeaderTitle theme={activeTheme}>
        {title.toUpperCase()}
      </StyledModalHeaderTitle>
      <StyledModalHeaderTitle theme={activeTheme} onClick={onClose}>
        <StyledCloseButton theme={activeTheme}>
          <FontAwesomeIcon cursor="pointer" icon={faTimesCircle} />
        </StyledCloseButton>
      </StyledModalHeaderTitle>
    </StyledModalHeader>
  )
}

export default ModalHeader
