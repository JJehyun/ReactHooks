# React hook 정리 중(branch, 예제 코드 참조)

- useRef (DOM 객체 접근, QuerySelector같은 기능)</br>
- useEffect
- Context API (전역 데이터 관리)
- useMemo (컴포넌트 기능 최적화(변수))
- use Callback (컴포넌트 기능 최적화(함수))
- useReducer (state 생성,관리)
- React.memo (컨포넌트 기능 최적화(컴포넌트))
- Custom hook (나만의 Hook 만들기)
- uselayouteffect (화면 랜더링 전 변수 설정, 화면 깜빡임 방지)
- useTransition (기능 최적화 , 함수 우선순위 미루기(사용자성 개선))
- useDeferredValue (기능 최적화 , 함수 우선순위 미루기(사용자성 개선))

---

## React useDeferredValue 사용

- 낮은 우선 순위를 지정하기 위한 훅
- useTransition = 함수 실행의 우선 순위를 지정 , useDeferredValue = 값의 업데이트 우선순위 지정
- 리액트가 성능에 따라 성능적으로 여유가 있을 때 업데이트를 시켜주는 훅
- 변수값 업데이트가 느리게 진행되어도 되는 것은 useDeferredValue훅을 이용한다.
- useMemo와 사용 시 불 필요한 재 랜더링을 막으면서 하위 컴포넌트나 상태의 업데이트를 지연시킬 수 있다.
  <br />

<br />

> 사용 예제

```
  const [name, setName] = useState<string>("");
  //useDeferredValue 훅 선언(덜 중요한 값 deferredName 변수를 사용)
  const deferredName = useDeferredValue(name);


  //useMemo로 deferredName의 값이 변할 때 여유있게 랜더링
  const result = useMemo(() => deferredName + "의 결과", [deferredName]);



  //deferredName를 화면 끊김없이 렌더링
       {deferredName
        ? Array(1000)
            .fill(null)
            .map((v, i) => <div key={i}>{result}</div>)
      : null}
```
