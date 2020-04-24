const required = value => (value ? undefined : "Required");

export const isPeselValid = pesel => {
  if (typeof pesel === "undefined" || !/^[0-9]{11}$/.test(pesel))
    return "Type PESEL";

  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let sum = 0;

  weights.forEach((weight, index) => {
    sum += weight * pesel.substring(index, index + 1);
  });

  const checkSum = sum % 10 === 0 ? 0 : 10 - (sum % 10);

  if (checkSum !== +pesel.substring(10, 11)) return "Invalid PESEL";
};

export const composeValidators = validator => value => {
  return typeof validator === "undefined" ? required(value) : validator(value);
};
