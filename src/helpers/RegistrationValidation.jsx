const RegistrationValidation = ({ value, isSubmitted, render }) => {
  let isValid = false;
  if (!value.length && isSubmitted) {
    return (isValid = true);
  }

  return render(isValid);
};

export default RegistrationValidation;
