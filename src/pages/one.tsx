import { useState, ChangeEvent } from "react";
import { useInput } from "../Customhook/useInput";

const displayMessage = (message: string): void => {
  alert(message);
};

function One() {
  const [inputValue, setinputValue, handleSubmit] = useInput(
    "하이",
    displayMessage
  );
  return (
    <div>
      <input value={inputValue} onChange={setinputValue}></input>
      <button onClick={handleSubmit}>버튼</button>
    </div>
  );
}

export default One;
