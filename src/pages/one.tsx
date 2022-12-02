import { useEffect, useRef, useState } from "react";
 
//몇번 랜더링 됐는지 세는 예제
 function One() {
    const [count,setCount] = useState(1);
    const renderCount = useRef(1)
        useEffect(()=>{
          renderCount.current = renderCount.current+1;
          console.log("랜더링 수 : ", renderCount.current)
        })
        return (
          <div>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(count + 1)}>버튼</button>
          </div>
        );
      }

export default One;
