import {useEffect, useMemo, useState } from "react";

 function Two() {
   const [number, setNumver] = useState<number>(0);
   const [istrue , setIstrue] = useState<boolean>(true)

   const memo = useMemo(()=>{
      return {
         turetrue : istrue ? "바뀜" : "안바뀜"
      }
   },[istrue])

   useEffect(()=>{
      console.log("useEffect 호출")
   },[memo])
   
     return (
         <div>
            <input type="number" value={number} onChange={(e) => setNumver(parseInt(e.target.value))} />
            <p>{memo.turetrue}</p>
            <button onClick={()=>{setIstrue(!istrue)}}>버튼 </button>
         </div>
    );
}
export default Two;