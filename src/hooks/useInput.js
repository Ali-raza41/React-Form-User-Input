import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  const [enterValue, setEnterValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enterValue);

  function handleInputChange(e) {
    setEnterValue(e.target.value);
    setDidEdit(false);
  }

  function inputBlurHandler() {
    setDidEdit(true);
  }

  return {
    value: enterValue,
    handleInputChange,
    inputBlurHandler,
    hasError: didEdit && !valueIsValid,
  };
}
