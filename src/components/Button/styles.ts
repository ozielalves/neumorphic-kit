import styled, { css } from 'styled-components';

import { theme } from '../../theme';
import { ButtonVariants } from './types';

export interface StyledButtonProps {
  variant?: ButtonVariants;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: ${theme.shadow.default};
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  :focus {
    outline: none;
  }

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      grid-column: 1 / 2;
      grid-row: 4 / 5;
      background: ${theme.colors.primary};
      box-shadow: inset 0.2rem 0.2rem 1rem ${theme.colors.primaryLight},
        inset -0.2rem -0.2rem 1rem ${theme.colors.primaryDark}, $shadow;
      color: ${theme.colors.greyLight1};

      &:hover {
        color: ${theme.colors.white};
      }
      &:active {
        box-shadow: inset 0.2rem 0.2rem 1rem ${theme.colors.primaryDark},
          inset -0.2rem -0.2rem 1rem ${theme.colors.primaryLight};
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      grid-column: 1 / 2;
      grid-row: 5 / 6;
      color: ${theme.colors.greyDark};

      &:hover {
        color: ${theme.colors.primary};
      }

      &:active {
        box-shadow: ${theme.shadow.inner};
      }
    `}

  p {
    font-size: 1.6rem;
  }
`;
