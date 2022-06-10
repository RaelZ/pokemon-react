import styled from 'styled-components'
import { StyleTheme } from '../../../types/Theme'

export const StyledSideBar = styled.div`
  ${({ theme, open }: { theme: StyleTheme; open: boolean }) => `
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 4.4em;
  height: 100%;

  background-color: ${theme.colors.primary};
  opacity: ${open ? '1' : '0'};

  box-sizing: border-box;
  transition: opacity 0.5s;

  z-index: ${open ? theme.zIndices.sidebar : 0};
`}
`
