import styled from 'styled-components';
import { StyleTheme } from '../../../types/Theme'

export const StyledSideBar = styled.div`${({ theme, open }: { theme: StyleTheme, open: boolean }) => `
  position: relative;
  bottom: 0;
  left: ${open ? '0' : '-100%'};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${open ? '100%' : '0'};
  max-width: ${open ? '16em' : '0'};
  height: 100%;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.alternative};
  opacity: ${open ? '1' : '0'};

  transition: all .25s ease-in-out;

  box-shadow: .25em 0 1em rgba(0, 0, 0, 0.5);
  box-sizing: border-box;

  z-index: ${theme.zIndices.sidebar};
`}`;
