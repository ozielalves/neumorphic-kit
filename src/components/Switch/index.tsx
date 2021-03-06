import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
}

export const Switch = ({
  active = false,
  id = 'checkbox',
  ...rest
}: SwitchProps) => {
  const [isActive, setIsActive] = React.useState(active);

  return (
    <Container>
      <input
        id={id}
        type="checkbox"
        checked={isActive}
        onChange={() => setIsActive(prev => !prev)}
        {...rest}
      />
      <label htmlFor={id}></label>
    </Container>
  );
};
