import { useState } from "react";
function useForm(validationFn, errorMessage) {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validationFn(value);

  const error = !isValid && isTouched ? errorMessage : "";

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const isTouchedHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return [
    value,
    isTouched,
    valueHandler,
    isTouchedHandler,
    reset,
    isValid,
    error,
  ];
}

export default useForm;
