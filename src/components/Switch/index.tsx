import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
}

export function Switch({
  active = false,
  id = 'switch',
  ...rest
}: SwitchProps) {
  const [isActive, setIsActive] = React.useState(active);

  return (
    <Container>
      <input
        id={id}
        type="checkbox"
        onChange={() => setIsActive((prev) => !prev)}
        {...rest}
      />
      <label htmlFor={id}></label>
    </Container>
  );
}
