import { useEffect, useRef, useState } from "react";
type name1 = {
  lastName: string;
  firstName: string;
};
//video 실행, 멈춤 , 제거 예제
const Three = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 ㅅㅈ");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 ㅈㄹ");
    };
  }, []);
  return <div>타이머 컴포넌트</div>;
};

export default Three;
