import React from 'react'
import useTheme from '../../hooks/useTheme'
import { themes } from '../../themes'
import { RoundButtonTheme } from '../../types/Theme'
import { StyledRoundButton } from './styled'

const RoundButton: React.FC<RoundButtonTheme> = ({
  children,
  color,
  bgcolor,
}) => {
  const { theme } = useTheme()

  return (
    <StyledRoundButton color={color} bgcolor={bgcolor} theme={themes[theme]}>
      {children}
    </StyledRoundButton>
  )
}

export default RoundButton
