import styled from 'styled-components'
import { RoundButtonTheme } from '../../types/Theme'

export const StyledRoundButton = styled.button`
  ${({ theme, bgcolor, color }: RoundButtonTheme) => `
  display: flex;
  align-items: center;
  justify-content: center;

  padding: .5em 1.5em;
  margin: 0 .5em;

  background-color: ${theme!.colors[bgcolor]};

  color: ${theme!.colors[color]};

  border: none;
  border-radius: 100em;

  box-shadow: 0 0 0 0 #00000000;

  font-size: ${theme!.fontSizes.medium};
  font-weight: ${theme!.fontWeights.bold};
  line-height: ${theme!.lineHeights.medium};

  cursor: pointer;

  text-transform: uppercase;

  transition: all .2s ease-in-out;

  &:hover {
    background-color: ${theme!.colors[bgcolor]}B0;
    color: ${theme!.colors[color]};
    box-shadow: 0 0 .5em 0 #00000080;
  }
`}
`
