import styled from 'styled-components';
import { StyleTheme } from '../../../types/Theme';

export const StyledContainer = styled.div`${({ theme }: { theme: StyleTheme }) => `
  position: relative;
  bottom: 0;

  display: flex;

  width: 100%;
  height: 100%;
`}`;
