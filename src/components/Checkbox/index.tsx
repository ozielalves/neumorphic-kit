import React, { InputHTMLAttributes } from 'react';
import { MdDone } from 'react-icons/md';

import { Container } from './styles';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
}

export const Checkbox = ({
  active = false,
  id = 'checkbox',
  ...rest
}: CheckboxProps) => {
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
      <label htmlFor={id}>
        <MdDone />
      </label>
    </Container>
  );
};
