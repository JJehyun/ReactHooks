import { useContext, useEffect, useRef, useState } from "react";
 import { Context } from "../Context/Contexts";
//input focus 예제
 function Two() {
    const data = useContext(Context);
    console.log(data?.boo())
     return (
         <div>
            하위 컴포넌트 context값 전달
            <p>{data?.name}</p>
            <p>{data?.num()}</p>
         </div>
    );
}
export default Two;