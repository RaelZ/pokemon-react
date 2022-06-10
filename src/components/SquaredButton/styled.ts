import styled from 'styled-components';
import { StyleTheme } from '../../types/Theme';

export const StyledSquareButton = styled.button`${({ theme, open }: { theme: StyleTheme, open: boolean }) => `
  display: flex;
  align-items: center;
  justify-content: ${open ? 'flex-start' : 'center'};

  width: 100%;

  padding: 1em 2em;
  
  background-color: ${theme.colors.primary};
  color: ${theme.colors.alternative};

  border: none;

  text-transform: uppercase;

  box-sizing: border-box;

  transition: all 0.2s ease-in-out;

  cursor: pointer;
  :hover {
    background-color: ${theme.colors.card};
  }
  p {
    display: flex;
    align-items: center;

    font-size: ${theme.fontSizes.medium};
    
    margin: .1em 0 0;
    padding-left: ${theme.space.medium};
    
    height: 100%;
  }
  svg {
    font-size: ${theme.fontSizes.medium};
  }
`}`;
