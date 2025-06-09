export const checkValidData = (email, password, number) => {
  const isEmailValid =
    /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );
  const isNumberValid = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/.test(number);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isNumberValid) return "Number is not Valid";
  return null;
};
