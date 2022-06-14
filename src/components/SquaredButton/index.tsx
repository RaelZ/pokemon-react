import React from 'react'
import useTheme from '../../hooks/useTheme'
import { TSquaredButton } from '../../types/SquaredButton'
import { StyledSquareButton } from './styled'

const SquaredButton: React.FC<TSquaredButton> = ({
  open,
  children,
  onClick,
}) => {
  const { activeTheme } = useTheme()

  return (
    <StyledSquareButton open={open} onClick={onClick} theme={activeTheme}>
      {children}
    </StyledSquareButton>
  )
}

export default SquaredButton
