import styled from 'styled-components'
import { StyleTheme } from '../../types/Theme'

export const StyledModalHeader = styled.div`
  ${({ theme }: { theme: StyleTheme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.space.medium};
  border-bottom: 0.01em solid ${theme.colors.divider};
`}
`
export const StyledModalHeaderTitle = styled.h2`
  ${({ theme }: { theme: StyleTheme }) => `
  font-size: ${theme.fontSizes.xlarge};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
  color: ${theme.colors.alternative2};
`}
`
export const StyledCloseButton = styled.p`${({ theme }: { theme: StyleTheme }) => `
  color: ${theme.colors.alternative2};
  transition: all .3s ease-in-out;
  :hover {
    color: ${theme.colors.secondary};
  }
`}`