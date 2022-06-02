import React from 'react'
import useTheme from '../../hooks/useTheme'
import { themes } from '../../themes'
import { SquaredButton } from '../../types/SquaredButton'
import { StyledSquareButton } from './styled'

const SquaredButton: React.FC<SquaredButton> = ({ children, onClick }) => {
  const { theme } = useTheme()

  return (
    <StyledSquareButton onClick={onClick} theme={themes[theme]}>
      {children}
    </StyledSquareButton>
  )
}

export default SquaredButton
