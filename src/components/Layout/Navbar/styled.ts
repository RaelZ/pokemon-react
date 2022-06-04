import styled from 'styled-components'
import { StyleTheme } from '../../../types/Theme'

export const StyledNav = styled.nav`
  ${({ theme }: { theme: StyleTheme }) => `
  position: relative;
  top: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4.375em;
  width: 100vw;

  padding: ${theme.padding.medium};
  
  background-color: ${theme.colors.primary};

  border-bottom: .1em inset ${theme.colors.card};

  color: ${theme.colors.alternative};
  
  z-index: ${theme.zIndices.navbar};
`}
`
export const StyledNavLeft = styled.div`
  ${({ theme }: { theme: StyleTheme }) => `
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 100%;
`}
`
export const StyledNavRight = styled.div`
  ${({ theme }: { theme: StyleTheme }) => `
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`}
`
