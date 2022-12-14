import { useCallback, useEffect, useState } from "react";
import { InputsType, UseInputType } from "libs/type";

const useInput = (initialValue: InputsType): UseInputType => {
  const [inputs, setInputs] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);
  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  useEffect(() => {
    if (Object.values(inputs).includes("")) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [inputs]);

  return [inputs, onChangeInput, isValid];
};

export default useInput;
