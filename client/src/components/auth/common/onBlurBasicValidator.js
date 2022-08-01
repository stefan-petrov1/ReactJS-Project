export const onBlurBasicValidator = (
  name,
  value,
  setErrors,
  validatorFunc,
  message
) => {
  let isValid = validatorFunc(value);

  if (!value) {
    message = 'Field must be filled.';
  }

  if (isValid) {
    message = '';
  }

  setErrors((oldState) => ({
    ...oldState,
    [name]: message,
  }));
};
