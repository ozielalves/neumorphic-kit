import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

import { theme } from '../../theme';

export const Container = styled.div`
  ${tw`w-24`}

  label {
    ${tw`h-12 w-full flex items-center cursor-pointer relative rounded-3xl bg-opacity-0 bg-white`}
    box-shadow: ${theme.shadow.default};

    ::after {
      ${tw`absolute transition-all ease duration-500 rounded-full left-16 w-8 h-8`}
      content: "";
      background: ${theme.colors.greyDark};
    }

    ::before {
      ${tw`absolute transition-all ease duration-500 rounded-full bg-opacity-0 w-full h-full`}
      content: "";
      background: linear-gradient(330deg, ${theme.colors.greyDark} 0%, ${
  theme.colors.primary
} 50%, ${theme.colors.primaryLight} 100%);
    }
  }

  input {
    ${tw`hidden`}

    :checked {
      ~ label {
        ::before {
          ${tw`opacity-100`}
        }

        ::after {
          left: 57%;
          background: ${theme.colors.greyLight1};
        }
      }
    }
  }
`;
