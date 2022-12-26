import { useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const [formValidatio, setFormValidatio] = useState({});

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {};

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
