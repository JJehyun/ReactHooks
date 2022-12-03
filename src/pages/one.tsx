import { useReducer, useState,useEffect } from "react";
import Two from "./two";

 //state에는 money의 값이 들어감
 //action은 reducer에게 state를 변경을 요청할 때 요구에 대한 내용이 들어감
 type Action = { type: 'INCREASE' } | { type: 'DECREASE' }

 function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      console.log("type: INCREASE")
      return state + 1;
    case 'DECREASE':
      console.log("type: DECREASE")
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

 function One() {
        const [count, dispatch] = useReducer(reducer, 0);
        const onIncrease = () => dispatch({ type: 'INCREASE' });
        const onDecrease = () => dispatch({ type: 'DECREASE' });
        return (
          <div>
            <p>{count}</p>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
          </div>
        );
      }

export default One;
