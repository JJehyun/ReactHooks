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
- Suspense (비동기 작업 동안 대체 컴포넌트 띄우기)
- React.lazy() (비동기 작업 동안 대체 컴포넌트 띄우기)
- React LifeCycle (리액트 생명 주기)

---

## React React.라이프 사이클 사용

> 라이프 사이클 메소드

- will : 어떤 작업을 시작하기 전에 실행
- Did : 어떤 작업 후에 실행

---

- Mount

  1. constructor : 컴포넌트 생성자 메서드, 컴포넌트를 만들 때 맨 처음 실행 , 초기 state 정의 가능
  2. getDerivedStateFromProps : props로 받아온 값을 state에 동기화 시키는 함수
  3. render : 컴포넌트를 그려주는 함수
  4. componentDidMount : 랜더링 후에 실행되는 함수 (이벤트,비동기작업 처리)

  </br>

- update (props변경, state변경, 부모 컴포넌트 리렌더링 , this.forceUpdate로 강제 렌더링 할때)

  1. getDerivedStateFromProps : props로 받아온 값을 state에 동기화 시키는 함수
  2. shouldCompoentUpdate : 렌더링을 할지 말지를 결정하는 함수
  3. render : 컴포넌트 랜더링
  4. getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반영하기 직전에 호출되는 함수,
     주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용한다.
  5. componentDidUpdate : 리렌더링 완료한 후 실행

  </br>

- Unmounting

  1. componentWillUnmount : 컴포넌트를 DOM에서 제거할 때 실행되는 함수
  2. componentDidCatch : 렌더링 중 에러가 났을 때 오류 UI를 보여주도록 할 수있게 하는 함수

  ```js
  componentDidCatch(error, info) {
  this.setState({
    error: true;
  });}
  // .. 에러시 보여줄 작업
  ```

  </br>
  </br>

```
ReactDOM 순서
//화면이 처음 그려질 때
1.getDefaultProps() -> getInitalState() -> componentWillMount() -> render() ->
componentDidMount()

//컴포넌트에 변화가 생겼을 때
1.componentWillReceiverProps() -> shouldCompoentUpdate() ->
compoenntWillUpdate() -> rener() ->componentDidUpdate()

```

> 최초 렌더링
- state, context, defaultProps 저장
- componentWillMount() : 컴포넌트가 생성되기 전에 처리 해야할 일을 명시 , render()가 실행되기 전에 실행되어야하는 코드를 적는 곳
- render() : 마운트됨(즉 화면에 그려짐)
- componentDidMount() : 마운트 직후에 실행될 코드를 작성하는 함수
- componentWillUnmount() : 컴포넌트가 소멸될 때 뒷 처리하는 함수
  </br>
  </br>

> 최초랜더링 후 상태 변화 시 호출되는 함수

- shouldCompoentUpdate()
  - rendom() 호출할 필요가 있냐/없냐를 판단해주는 함수 return 값이 true면 render()함수 호출, return 값이 false면 render()함수를 호출하지 않는다.
  - shouldCompoentUpdate(nextProps, nextState){
    return true / false
    }
- compoenntWillUpdate()
  - 새로운 속성이나 상태를 받은 후 렌더링 직전에 호출된다. (state변경 시 shouldCompoentUpdate()가 true를 반환했을 때 render() 함수전에 호출되는 함수 , 초기 렌더링에서는 호출되지 않는다.)
  - shouldComponentUpdate가 불린 이후 컴포넌트 업데이트 직전에 호출되는 함수
- componentDidUpdate()
  - render()함수로 업데이트가 완료되고 호출되는 함수
  - 갱신이 일어난 직후 (render() 후 ) 실행 , 최초 렌더링에서는 호출되지 않음

<br />
<br />

## 함수형

render -> useEffect

- useEffect() : 렌더링 직후 ( == componentDidMount와 componentDidUpdate같은 역할 )
- useEffect(){
  return function(){} --> componentWillUnmount() 와 같은 역할
  }

```js
var


```
