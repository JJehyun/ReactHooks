import { useEffect, useRef, useState } from "react";
 import { Context,dataused } from "../Context/Contexts";
 import Two from "./two";
//몇번 랜더링 됐는지 세는 예제
 function One() {

        return (
          <div>
            상위 컴포넌트
            <div style={{borderBottom:"1px solid black"}} />
            <Context.Provider value={dataused}>
              <Two />
            </Context.Provider>
          </div>
        );
      }

export default One;
