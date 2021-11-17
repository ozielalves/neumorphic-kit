import styled from 'styled-components';

import { theme } from '../../theme';

export const Container = styled.div.attrs({
  className: `w-24 flex justify-center`,
})`
  label {
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${theme.shadow.default};
    position: relative;
    cursor: pointer;
    border-radius: 0.5rem;

    :hover svg {
      color: ${theme.colors.primary};
    }

    svg {
      height: 1.8rem;
      width: 1.8rem;
      color: ${theme.colors.greyDark};
      transition: 0.3s ease;
    }
  }

  input {
    display: none;

    &:checked {
      & ~ label {
        box-shadow: ${theme.shadow.inner};

        svg {
          color: ${theme.colors.primary};
        }
      }
    }
  }
`;
