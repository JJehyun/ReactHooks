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

---

## React React.lazy 사용

- pages의 이미지 업로드 예제 코드 참고 바람

- React.lazy로 불러온 컴포넌트는 단독으로 쓰일 수 없고, React.Suspense 컴포넌트로 하위에서 렌더링되어야 한다.
- lazy 컴포넌트는 반드시 Suspense 컴포넌트 하위에서 렌더링되어야 하며 Suspense는 lazy 컴포넌트가 로드되길 기다리는 동안 로딩 화면과 같은 예비 컨텐츠를 보여줄 수 있게 해줌
  <br />

> 사용법<br />
> React 공식 문서에 따르면 Router 바로 아래에 Suspense를 위치시키고, Route로 보여줄 컴포넌트들을 React.lazy로 불러올 것을 권장함

```
--예제 코드--
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
```

> suspense와 react.lazy의 다른 예시

```
import React, { lazy, Suspense } from 'react';

const AvatarComponent = lazy(() => import('./AvatarComponent'));

const renderLoader = () => <p>Loading</p>;

const DetailsComponent = () => (
  <Suspense fallback={renderLoader()}>
    <AvatarComponent />
  </Suspense>
)

```

>이미지 View(React.lazy()) pages src 코드 참고

![lazy1](https://user-images.githubusercontent.com/86187456/205501317-6c578758-0986-4d6d-9b08-a5fe5be8b7b2.png)
![lazy2](https://user-images.githubusercontent.com/86187456/205501321-7279e56b-5120-49cb-92c8-6db322a19152.png)
