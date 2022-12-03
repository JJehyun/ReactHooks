import { useCallback, useState,useEffect } from "react";
 import Two from "./two";


 //button눌렀을때 컴포넌트가 재렌더링 되지만 , changeFun , useCallback 함수는  재선언 되지 않고 유지 된다.
 //inputbox를 변경했을때만 useCallback 험수를 재선언해서 재선언한 주소값을 객체에 저장한다.
 function One() {
  const [number,serNumber] = useState<number>(0);
  const [istrue,setIstrue] = useState<boolean>(true);

  const changeFun = useCallback(()=>{
    console.log(`${number}`)
    return;
  },[number])

  useEffect(()=>{
    console.log("useCallback 재할당 됨")
  },[changeFun])


        return (
          <div>
              <input type="number" value={number} onChange={(e)=> serNumber(parseInt(e.target.value))} />
              <button onClick={()=> setIstrue(!istrue)}>{istrue.toString()}</button>
              <br />
              <button onClick={changeFun}>useCallback 변경 안됨</button>
          </div>
        );
      }

export default One;
