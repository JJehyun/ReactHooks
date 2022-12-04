import { useState, ChangeEvent, MouseEventHandler } from "react";
//커스텀 훅

type returnType = [
  string,
  (event: ChangeEvent<HTMLInputElement>) => void,
  MouseEventHandler<HTMLButtonElement>
];

export function useInput(
  initialForm: string,
  submitAction: (message: string) => void
): returnType {
  const [inputValue, setinputValue] = useState<string>(initialForm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.target.value);
  };

  const handleSubmit = (): void => {
    setinputValue("");
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSubmit];
}
