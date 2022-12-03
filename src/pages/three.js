import { useEffect, useRef, useState } from "react";
 
//video 실행, 멈춤 , 제거 예제
const Three = ({ creatBoxstyle}) => {
  const [style,setStyle] = useState({})

  useEffect(()=>{
    console.log("박스 컴포넌트 함수 호출됨");
    setStyle(creatBoxstyle())
  },[creatBoxstyle])
        return (
            <div style={style}>

          </div>
        );
      }

export default Three;
