import styled from 'styled-components';

import { theme } from '../../theme';

export const Container = styled.div.attrs({
  className: `w-24`,
})`
  label {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    box-shadow: ${theme.shadow.default};
    background: rgba(255, 255, 255, 0);
    position: relative;
    cursor: pointer;
    border-radius: 1.6rem;

    ::after {
      content: '';
      position: absolute;
      left: 0.4rem;
      width: 2.1rem;
      height: 2.1rem;
      border-radius: 50%;
      background: ${theme.colors.greyDark};
      transition: all 0.4s ease;
    }

    ::before {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(
        330deg,
        ${theme.colors.greyDark} 0%,
        ${theme.colors.primary} 50%,
        ${theme.colors.primaryLight} 100%
      );
      opacity: 0;
      transition: all 0.4s ease;
    }
  }

  input {
    display: none;

    &:checked {
      & ~ label {
        ::before {
          opacity: 1;
        }

        ::after {
          left: 57%;
          background: ${theme.colors.greyLight1};
        }
      }
    }
  }
`;
