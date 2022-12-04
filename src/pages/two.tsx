import { useEffect, ReactNode } from "react";
import { images } from "../database/image";
import Three from "./three";
//LazyWrapper
function Two() {
  return (
    <>
      {images.map((image) => (
        <Three key={image.id} src={image.src} name={image.name} />
      ))}
    </>
  );
}
export default Two;
