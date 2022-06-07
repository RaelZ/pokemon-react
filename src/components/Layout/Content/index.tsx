import React from 'react'
import { Children } from '../../../types/Children'
import { StyledContainer } from './styled'

const Content: React.FC<Children> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Content
