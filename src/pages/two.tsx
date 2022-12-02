import { useEffect, useRef, useState } from "react";
 
//input focus 예제
 function Two() {
     const inputRef = useRef<HTMLInputElement>(null);
     useEffect(()=>{
        if(inputRef.current)
        inputRef.current.focus();
     },[])

     const onclick = ():void =>{
        if(inputRef.current)
        inputRef.current.focus();
     }

     return (
         <div>
             <input ref={inputRef} type="text" placeholder=""></input>
             <button onClick={onclick}>버튼</button>
         </div>
    );
}
export default Two;