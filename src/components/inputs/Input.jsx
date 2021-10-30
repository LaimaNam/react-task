import React from 'react';
import styled from 'styled-components';

const Input = ({ type, placeholder, label, icon }) => {
  return (
    <InputGroupWrapper>
      {label && <label>{label}</label>}
      <div>
        {icon}
        <InputStyled type={type} placeholder={placeholder} />
      </div>
    </InputGroupWrapper>
  );
};

export default Input;

const InputGroupWrapper = styled.div`
  label {
    font-weight: 500;
    font-size: 0.8em;
  }

  div {
    position: relative;

    svg {
      position: absolute;
      top: 6px;
      left: 8px;
      fill: #707070;
    }
  }
`;

const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #d3d3d3;
  padding: 5px;
  padding-left: 30px;
  outline: none;

  &:focus {
    border: 2px solid var(--primary-color);
  }
`;
