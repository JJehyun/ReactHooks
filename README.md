# React hook 정리 중(branch, 예제 코드 참조)
- useRef </br>
- Context API (전역 데이터 관리)
- useMemo (컴포넌트 기능 최적화)
- use Callback (컴포넌트 기능 최적화)
- useReducer (state 생성,관리)


## React useReducer
1. 여러개의 하위 값을 포함하는 복잡한 state를 사용할 때 사용 
2. useReducer (Dispatch , Action , Reducer) 3가지로 구성됨
3. 여러상황마다 각 각 다르게 하나의 state 변경이 필요할 때 사용 (swich문 분기 처리-reducer)
3. reducer의 내용이 바뀔 때 마다 화면의 재렌더링
4. swich 문과 혼합해서 사용, 실수를 줄일 수 있음
<br />
<br />

[Reducer1](https://user-images.githubusercontent.com/86187456/205430489-85dc82ae-75d3-49bb-9b74-d69185c4ae59.png)

# Reducer, dispatch , action

- Reducer = state를 업데이트 시켜주는 역할 , state를 변경하고자 한다면 Reducer를 이용해서 변경
- dispatch = state 업데이트를 위한 요구, Reducer에 state 변경을 요구하는 역할
- action = 요구의 내용 ,  dispatch가 Reducer에게 state 변경을 요구할 때 변경될 state값

```
Dispatch(Action) ----> Reducer(State, Action)

::dispatch가 state를 action으로 변경을 요청 -> Reducer가 state를 action으로 변경
```



>사용법
```
//action의 타입
 type Action = { type: 'INCREASE' } | { type: 'DECREASE' }

//state count 초기값 = 0 
const [count, dispatch] = useReducer(reducer, 0);


// dispatch를 호출 실행되는 reducer 함수
 function reducer(state: number, action: Action): number {
  switch (action.type) {
    
    //전달 되는 action의 type마다 state변경값을 다르게 
    //return값이 count state값으로 변경되고 재 렌더링됨
    case 'INCREASE':   
      return state + 1;
    
    case 'DECREASE':    
      return state - 1;

      //이상한 action이 들어왔을때 error
    default:
      throw new Error('Unhandled action');
  }
}

//dispatch 호출 후 action으로 state를 변경하는 함수
const onIncrease = () => dispatch({ type: 'INCREASE' });
const onDecrease = () => dispatch({ type: 'DECREASE' });
```!
![Reducer1](https://user-images.githubusercontent.com/86187456/205430516-f8592eb0-f053-4c66-922f-b2932cd08d7a.png)
