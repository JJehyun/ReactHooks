import { useReducer, useState, useEffect, useMemo } from "react";
import Three from "./three";
import Two from "./two";
function One() {
  const [parent, setParent] = useState<number>(0);
  const [child, setChild] = useState<number>(0);
  const parentFun = (): void => {
    setParent(parent + 1);
  };
  const childFun = (): void => {
    setChild(child + 1);
  };

  type name = {
    lastName: string;
    firstName: string;
  };
  const obj: name = useMemo(() => {
    return {
      lastName: "김",
      firstName: "김김",
    };
  }, []);

  console.log("자식 props 변화X 부모만 재 렌더링");
  return (
    <div>
      <div
        style={{ backgroundColor: "bisque", width: "300px", height: "300px" }}
      >
        <button onClick={parentFun}>부모만 재렌더링</button>
        <br />
        <button onClick={childFun}>부모, 자식 재렌더링</button>
        <Two props={child} />
        <Three {...obj} />
      </div>
    </div>
  );
}

export default One;
