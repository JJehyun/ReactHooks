import { useEffect, ReactNode, useState } from "react";
import { images } from "../database/image";
import Three from "./three";

type types = {
  num: number;
};
//function
function Two({ num }: types) {
  const [numberState, setNumberState] = useState(num);
  const [data, setDate] = useState(new Date().toString());
  return (
    <>
      <div
        style={{ width: "300px", height: "300px", border: "green 1px solid" }}
      >
        function style component
        <div>{numberState.toString()}</div>
        <div>{data.toString()}</div>
        <button
          onClick={() => {
            setNumberState(Math.random());
          }}
        >
          버튼
        </button>
      </div>
    </>
  );
}
export default Two;
