import React, { FC, ButtonHTMLAttributes } from 'react';
import { StyledButton, StyledButtonProps } from './styles';

export interface ButtonProps
  extends Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      'className' | 'variant'
    >,
    StyledButtonProps {
  text: string;
}

export const Button: FC<ButtonProps> = ({
  text,
  id = 'button',
  variant = 'primary',
  ...rest
}) => {
  return (
    <StyledButton id={id} variant={variant} {...rest}>
      <p>{text}</p>
    </StyledButton>
  );
};
