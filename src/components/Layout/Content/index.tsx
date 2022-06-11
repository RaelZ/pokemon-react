import React from 'react'
import useSidebar from '../../../hooks/useSidebar'
import { Children } from '../../../types/Children'
import { StyledContainer } from './styled'

const Content: React.FC<Children> = ({ children }) => {
  const { menuOpen } = useSidebar()

  return <StyledContainer open={menuOpen}>{children}</StyledContainer>
}

export default Content
