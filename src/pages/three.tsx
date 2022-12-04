import { lazy, Suspense } from "react";

export interface Iprops {
  src: string;
  name: string;
}
const LazyImage = lazy(() => import("./LazyImage"));
//LazyItem.tsx
const Three = ({ src, name }: Iprops) => {
  return (
    <div>
      <Suspense fallback={<div>...loading</div>}>
        {" "}
        // 컴포넌트가 다 불러오기 전까지 ...loading이라는 컴포넌트를 보여줍니다.
        Suspense를 사용하지 않으면 에러가 납니다.
        <LazyImage src={src} name={name} /> // 다 불러와지면 해당 컴포넌트를
        보여줍니다.
      </Suspense>
      {name}
    </div>
  );
};

export default Three;
