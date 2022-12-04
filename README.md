# React hook 정리 중(branch, 예제 코드 참조)

- useRef </br>
- Context API (전역 데이터 관리)
- useMemo (컴포넌트 기능 최적화(변수))
- use Callback (컴포넌트 기능 최적화(함수))
- useReducer (state 생성,관리)
- React.memo (컨포넌트 기능 최적화(컴포넌트))
- Custom hook (나만의 Hook 만들기)
- useEffect

---

## React useEffect 사용

- 컴포넌트가 마운트 되었을 때
- 컴포넌트가 업데이트 되었을 때
- 마운트 해제(화면에서 사라질 때) 되었을 때

  <br/>

> useEffect의 CLeanUp 작업

```
  useEffect(() => {
    //컴포넌트가 맨처음 렌더링 됐을 때만 실행되는 콜백 (의존성배열이 [])
    const timer = setInterval(() => {
      console.log("타이머 ㅅㅈ");
    }, 1000);

    //컴포넌트가 언마운트 될때 화면에서 사라질때 실행되는 콜백 (의존성배열 [])
    return () => {
      clearInterval(timer);
      console.log("타이머 ㅈㄹ");
    };
  }, []);

```

</br>

> 사용법

```
useEffect (()=>{
  //렌더링 될때 마다 실행될 콜백함수
})


useEffect (()=>{
  //마운트 될때만 첫번째 랜더링에만 실행되는 콜백 함수
},[])


useEffect(()=>{
  //의존성 배열이 변경될 때마다 실행될 콜백 함수
},[의존성 배열])
```
