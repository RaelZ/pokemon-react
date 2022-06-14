import React from 'react'
import useTheme from '../../hooks/useTheme'
import { RoundButtonTheme } from '../../types/Theme'
import { StyledRoundButton } from './styled'

const RoundButton: React.FC<RoundButtonTheme> = ({
  children,
  color,
  bgcolor,
  noPadding,
  onClick
}) => {
  const { activeTheme } = useTheme()

  return (
    <StyledRoundButton
      onClick={onClick}
      noPadding={noPadding}
      color={color}
      bgcolor={bgcolor}
      theme={activeTheme}
    >
      {children}
    </StyledRoundButton>
  )
}

export default RoundButton
