import React from 'react';
import styled from 'styled-components';

//components
import Input from '../inputs/Input';
import CommonButton from '../buttons/CommonButton';

//icons
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLock } from 'react-icons/bi';
import RegistrationValidation from '../../helpers/RegistrationValidation';

//render props validacija

const FormBottom = () => {
  return (
    <FormWrapper>
      <RegistrationValidation
        render={(validateInput) => (
          <Input
            type="name"
            placeholder="John Smith"
            label="Name"
            icon={<FaRegUser />}
            validate={validateInput}
          />
        )}
      />

      <Input
        type="email"
        placeholder="John@gmail.com"
        label="Email"
        icon={<AiOutlineMail />}
      />
      <Input
        type="password"
        placeholder="*****"
        label="Password"
        icon={<BiLock />}
      />
      <CommonButton text="Submit" width="100%" />
    </FormWrapper>
  );
};

export default FormBottom;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 5px;
  button {
    margin-top: 15px;
  }
`;
