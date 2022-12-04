# React hook 정리 중(branch, 예제 코드 참조)

- useRef </br>
- Context API (전역 데이터 관리)
- useMemo (컴포넌트 기능 최적화(변수))
- use Callback (컴포넌트 기능 최적화(함수))
- useReducer (state 생성,관리)
- React.memo (컨포넌트 기능 최적화(컴포넌트))
- Custom hook (나만의 Hook 만들기)
- useEffect
- uselayouteffect (화면 깜빡거림 방지)
- useTransition
- useDeferredValue

---
![생명구조](https://user-images.githubusercontent.com/86187456/205478873-e7620139-b401-467d-92d1-5708e05f52ab.png)
## React uselayouteffect 사용

- stateUpdate 때문에 화면 깜빡임이 발생할 때 사용하는 hook
- 네트워크 , 캐시를 통해 변수를 받아서 렌더링 할 때 약간의 버벅거림이 생김(깜빡 거림)
- render -> Browser paint screen -> cleanup Effects (useEffect는 화면을 그린 후 실행됨)
- reder -> useLayoutEffect -> Browser paint screen (화면을 그리기 전에 실행됨)

### 정리

- useEffect의 이펙트는 DOM이 화면에 그려진 이후에 호출된다.

- useLayoutEffect의 이펙트는 DOM이 화면에 그려지기 전에 호출된다.

- 따라서 렌더링할 상태가 이펙트 내에서 초기화되어야 할 경우, 사용자 경험을 위해 useLayoutEffect를 활용하자!

> useLayoutEffect 사용법

```
  const [name, setName] = useState("");

  useLayoutEffect(() => {
    //네트워크 통신...
    setName("김제현");
  });

    //useEffect -> 사용하면 useEffect 보다 Browser paint screen 먼저 일어나 화면 깜빡임이 생김
    //useLayoutEffect -> 사용하면 Browser paint screen 보다 useLayoutEffect 먼저 일어나 깜빡임이 사라짐
    <>
      <div>ㅎㅇㅎㅇㅎㅇ{name}</div>
      <div>ㅎㅇㅎㅇㅎㅇ{name}</div>
      <div>ㅎㅇㅎㅇㅎㅇ{name}</div>
      <div>ㅎㅇㅎㅇㅎㅇ{name}</div>
      <div>ㅎㅇㅎㅇㅎㅇ{name}</div>
    </>

```

