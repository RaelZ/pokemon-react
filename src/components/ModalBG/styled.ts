import styled from 'styled-components';

export const StyledModalBG = styled.div`${({ background }: {background?: boolean}) => `
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${background ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  z-index: 301;
`}`;
