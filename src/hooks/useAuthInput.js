import { useState, useCallback } from "react";

const useAuthInput = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  const { email, password } = inputs;

  const onChangeAuthInput = useCallback(
    (e) => {
      const { name, value } = e.target;

      setInputs({
        ...inputs,
        [name]: value,
      });

      if (name === "email") {
        if (value.includes("@") && value.includes(".")) {
          setIsValidatedEmail(true);
        } else {
          setIsValidatedEmail(false);
        }
      } else if (name === "password") {
        if (value.length >= 8) {
          setIsValidatedPassword(true);
        } else {
          setIsValidatedPassword(false);
        }
      }
    },
    [inputs]
  );

  return {
    onChangeAuthInput,
    email,
    password,
    isValidatedEmail,
    isValidatedPassword,
  };
};

export default useAuthInput;
