import { useState, ChangeEvent } from "react";
import Timer from "./three";
function One() {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        Toggle Timer
      </button>
    </div>
  );
}

export default One;
