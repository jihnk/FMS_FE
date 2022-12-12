import { useCallback, useState } from "react";
import { InputsType, UseInputType } from "libs/type";

const useInput = (initialValue: InputsType): UseInputType => {
  const [inputs, setInputs] = useState(initialValue);
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

  return [inputs, onChangeInput];
};

export default useInput;
