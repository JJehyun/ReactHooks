import { useEffect, ReactNode } from "react";
import { images } from "../database/image";
import Three from "./three";
//function
function Two(num: number) {
  return (
    <>
      <div
        style={{ width: "300px", height: "300px", border: "green 1px solid" }}
      >
        function style component
      </div>
    </>
  );
}
export default Two;
