import React from 'react';
import ButtonStyleWrapper from './button.style';

const Button = ({text, onClick, className}) => {
  return (
       <ButtonStyleWrapper className={className} onClick={onClick}>
        {text}
        </ButtonStyleWrapper>
  )
}

export default Button;
