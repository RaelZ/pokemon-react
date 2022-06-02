import styled from 'styled-components';

export const StyledModalBG = styled.div`${({ theme }) => `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${theme ? '#00000000' : 'rgba(0, 0, 0, 0.5)' };
`}`;
