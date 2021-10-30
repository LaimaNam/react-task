import React from 'react';

const RegistrationValidation = ({ render, value }) => {
  const validateInput = (value) => {
    if (value.length === 0) {
      return <p>{value} must be filled.</p>;
    }
  };

  return render(validateInput);
};

export default RegistrationValidation;
