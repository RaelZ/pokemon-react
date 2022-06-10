import styled from 'styled-components';
import { StyleTheme } from '../../types/Theme';

export const StyledLanguageButton = styled.button`${({ theme }: {theme: StyleTheme}) => `
  position: relative;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  border: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.alternative};
  font-size: ${theme.fontSizes.xlarge};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  margin-left: .5em;

  &:hover {
    background-color: ${theme.colors.alternative};
    color: ${theme.colors.primary};
  }
`}`;

export const StyledMenu = styled.div`${({ theme }: {theme: StyleTheme}) => `
  position: absolute;
  top: 4.3em;
  right: 1.5em;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.alternative};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0;

  z-index: 303;
`}`;
export const SquaredLanguageButton = styled.button`${({ theme }: {theme: StyleTheme}) => `
  position: relative;
  width: 1.5em;
  height: 1.5em;
  border: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.alternative};
  font-size: ${theme.fontSizes.xlarge};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: ${theme.colors.alternative};
    color: ${theme.colors.primary};
  }
`}`;
