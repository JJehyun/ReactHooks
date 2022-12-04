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
- useTransition (기능 최적화 , 함수 우선순위 미루기(검색 결과))
- useDeferredValue

---

<br />

![12](https://user-images.githubusercontent.com/86187456/205489774-9a5a9041-27ad-42d5-a533-432feb7d6caa.png)

<br />

## React useTransition 사용

- 특정 함수의 호출이 너무 자주 일어나지 않도록 일정 시간 동안 함수 실행을 의도적으로 지연시키는 것
- useTransition 낮은 우선 순위를 가진 함수를 뒤 늦게 실행하도록 도와주는 hook
- useTransition()을 사용하여 특정 상태 업데이트의 우선순위가 더 낮다는 것을 React에 알릴 수 있음
- useTransition과 startTransition은 일부 상태 업데이트를 급하지 않은 업데이트로 간주한다. concurrent에서는 급한 상태 업데이트가 급하지 않은 상태 업데이트를 중단할 수 있다.

<br />

> ex) input 창과 input에대한 검색 내용을 보여주는 화면에서 input창은 입력 즉시 입력되어야해서 우선 순위가 높다. 하지만 input에 대한 검색 내용은 통신을 받아와서 렌더링 되기 때문에 우선순위가 낮다.

<br />

> 사용 예제

```
  //useTransition훅 선언
  const [loading, startTransition] = useTransition();



    const onchange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    //우선 순위가 높은 함수
    setName(e.target.value);

    //우선 순위가 낮은 함수startTransition로 묶어줌
    startTransition(() => {
      setResult(e.target.value);
    });
  }, []);


      <div>{count}</div>

      //우선 순위가 낮은 함수가 그려지기 전에 띄울 로딩창
      {loading ? <div>로딩중 로딩중 로딩중 로딩중 로딩중</div> : null}
      <input value={name} onChange={onchange} />
      {name
        ? Array(1000)
            .fill(null)
            .map((v, i) => <div key={i}>{result}</div>)
        : null}

```
