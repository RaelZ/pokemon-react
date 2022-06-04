import styled from 'styled-components';
import { StyleTheme } from '../../../types/Theme'

export const StyledSideBar = styled.div`${({ theme, open }: { theme: StyleTheme, open: boolean }) => `
  position: relative;
  bottom: 0;
  left: ${open ? '0;' : '-100%;'}

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${open ? '100%;' : '0;'}
  max-width: ${open ? '16.000em;' : '0;'};
  height: 100%;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.alternative};

  transition: all .25s ease-in-out;

  box-sizing: border-box;

  z-index: ${theme.zIndices.sidebar};
`}`;
