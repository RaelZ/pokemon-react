import styled from 'styled-components'
import { StyleTheme } from '../../types/Theme';

export const NavBarLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 3em;

  padding: 0 1em;

  background-color: #000;

  z-index: 1;
`
export const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const NavBarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const StyledMain = styled.main`${({ theme, open }: { theme: StyleTheme, open: boolean }) => `
  position: relative;
  bottom: 0;
  left: ${open ? '0' : '5em'};

  transition: left 0.25s ease-;

  width: 100%;
`}`;