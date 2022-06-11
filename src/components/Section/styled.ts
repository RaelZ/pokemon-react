import styled from 'styled-components';
import { StyleTheme } from '../../types/Theme';

export const StyledSection = styled.div`${({ theme }: { theme: StyleTheme }) => `
  padding: ${theme.padding.xlarge};
  border-radius: 0.5rem;
`}`;
