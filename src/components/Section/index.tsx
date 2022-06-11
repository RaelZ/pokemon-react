import React from 'react'
import useTheme from '../../hooks/useTheme'
import { themes } from '../../themes'
import { Children } from '../../types/Children'
import { StyledSection } from './styled'

const Section: React.FC<Children> = ({ children }) => {
  const { theme } = useTheme()

  return <StyledSection theme={themes[theme]}>{children}</StyledSection>
}

export default Section
