import React from 'react'
import { Content } from '../../../types/Theme'
import { StyledContainer } from './styled'

const Content: React.FC<Content> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Content
