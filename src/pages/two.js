import {useEffect, useCallback, useState } from "react";
import Three from "./three";
 function Two() {
   const [size,setSize] = useState(100);
   const [isDark,setIsDark] = useState(false);



   //박스 사이즈가 변경될 때만 호출됨
   const creatBoxstyle = useCallback(()=>{
      return{
         backgroundColor:"pink",
         width:`${size}px`,
         height:`${size}`
      }
   },[size])


   
     return (
         <div style={{background:isDark ? "black" : "white"}}>
            <input type="number" value={size} onChange={(e)=>{setSize(parseInt(e.target.value))}}/>
            <button onClick={()=>setIsDark(!isDark)}>사이즈 변경 함수는 호출안됨</button>
            <Three creatBoxstyle={creatBoxstyle}></Three>
         </div>
    );
}
export default Two;