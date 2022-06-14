import styled from 'styled-components'
import { StyleTheme } from '../../types/Theme'

export const StyledLogin = styled.div`
  ${({ theme }: { theme: StyleTheme }) => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 19em;
  width: 24em;
  max-width: 80vw;
  height: 30em;
  padding: ${theme.space.large};
  background-color: ${theme.colors.card};
  border-radius: ${theme.radio.medium};
  box-shadow: ${theme.shadows.medium};
  z-index: 302;
`}
`
export const StyledLoginHeader = styled.div`
  ${({ theme }: { theme: StyleTheme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.space.medium};
  border-bottom: 0.01em solid ${theme.colors.divider};
`}
`
export const StyledLoginHeaderTitle = styled.h2`
  ${({ theme }: { theme: StyleTheme }) => `
  font-size: ${theme.fontSizes.xlarge};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
  color: ${theme.colors.alternative2};
`}
`
