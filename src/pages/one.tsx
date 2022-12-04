import { useState, startTransition, Suspense } from "react";
import Two from "./two";
import Three from "./three";
//App
function One() {
  return (
    <>
      <div>hihi</div>
      {/* <Two num={3} />
      <Three num={3} /> */}
    </>
  );
}
export default One;
