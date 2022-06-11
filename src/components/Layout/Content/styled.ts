import styled from 'styled-components'
import { StyleTheme } from '../../../types/Theme'

export const StyledContainer = styled.div`
  ${({ theme, open }: { theme: StyleTheme; open: boolean }) => `
  position: relative;
  bottom: 0;

  display: flex;

  width: ${open ? 'calc(100% - 16em)' : 'calc(100% - 4.4em)'};
  height: 100%;
`}
`
