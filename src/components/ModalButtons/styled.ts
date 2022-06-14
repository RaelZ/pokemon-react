import styled from 'styled-components';
import { StyleTheme } from '../../types/Theme';

export const SyledButtonContainer = styled.div`${({ theme }: { theme: StyleTheme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;  
`}`;
