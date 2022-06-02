import styled from 'styled-components';
import { StyleTheme } from '../../../types/Theme'

export const StyledSideBar = styled.div`${({ theme }: { theme: StyleTheme }) => `
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 16.000em;
  height: calc(100% - 4.375em);

  background-color: ${theme.colors.primary};
  color: ${theme.colors.alternative};

  box-sizing: border-box;
`}`;
