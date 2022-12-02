import { useMemo, useState } from "react";
 import Two from "./two";

 function One() {
//Memoization 사용
//useMemo 사용 예제

//변수
const [hardNumber,setHardNumber] = useState<number>(1);

//오래걸리는 연산
const hardCalculate = (number:number) : number =>{
  for(let i=0; i<999999999; i++){} //오래걸리는 연산
  return number+10000
}

//hardNumber가 변경 되지 않았다면 hardSum의 값을 재사용한다.
//hardNumber가 변경 되면 콜백함수를 다시 계산해서 hardSum에 넣게 된다.
const hardSum = useMemo(()=>{
  return hardCalculate(hardNumber)
}
,[hardNumber])

        return (
          <div>
            <input type="number" value={hardNumber} onChange={(e)=>{setHardNumber(parseInt(e.target.value))}} />
            <span> + 10000 = {hardSum} </span>
          </div>
        );
      }

export default One;
