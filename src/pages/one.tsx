import { useState, startTransition, Suspense } from "react";
import Two from "./two";
//App
function One() {
  return (
    <>
      <Two />
    </>
  );
}
export default One;
