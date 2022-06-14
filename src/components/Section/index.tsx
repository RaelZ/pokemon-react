import React from 'react'
import useTheme from '../../hooks/useTheme'
import { Children } from '../../types/Children'
import { StyledSection } from './styled'

const Section: React.FC<Children> = ({ children }) => {
  const { activeTheme } = useTheme()

  return <StyledSection theme={activeTheme}>{children}</StyledSection>
}

export default Section
