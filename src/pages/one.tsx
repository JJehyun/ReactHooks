import { useState, startTransition, Suspense } from "react";
import Two from "./two";

//App
function One() {
  return (
    <>
      <div>hihi</div>
      <Two num={3} />
    </>
  );
}
export default One;
