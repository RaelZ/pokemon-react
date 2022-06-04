import React from 'react'
import useTheme from '../../hooks/useTheme'
import { themes } from '../../themes'
import { SquaredButton } from '../../types/SquaredButton'
import { StyledSquareButton } from './styled'

const SquaredButton: React.FC<SquaredButton> = ({ open, children, onClick }) => {
  const { theme } = useTheme()

  return (
    <StyledSquareButton open={open} onClick={onClick} theme={themes[theme]}>
      {children}
    </StyledSquareButton>
  )
}

export default SquaredButton
