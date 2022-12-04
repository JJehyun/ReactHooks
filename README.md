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

---

![sus1](https://user-images.githubusercontent.com/86187456/205493252-1dc0b54d-5704-44a6-871d-b8c6a62162bb.png)
>리액트 예제 코드

## React useDeferredValue 사용

- 비동기 작업을 하는 컴포넌트를 자식으로 가짐 , 자식 컴포넌트가 비동기 작업을 진행하는 동안, 콜백에 할당 받은 컴포넌트를 렌더링함
- 자식 컴포넌트의 비동기 작업이 끝나면 리렌더링을 해서 자식 컴포넌트를 보여줌
- Start fetching -> Start rendering -> Finish fetching
- suspense를 활용하면 해당 컴포넌트를 사용하는 측에서 로딩 상태를 표현하는 방식을 정의하고 ,UI 일관성을 유지할 수 있음

- React Query , Recoil , Relay --> suspense 사용하기 더 편함

<br />

pages 예제 코드 참고

<br />

> 사용 예제

```
import { Suspense } from "react";
suspense

      <nav>
        <button onClick={() => startTransition(() => setPage(0))}>
          첫 번째 페이지
        </button>
        <button onClick={() => startTransition(() => setPage(1))}>
          두 번째 페이지
        </button>
        <button onClick={() => startTransition(() => setPage(2))}>
          세 번째 페이지
        </button>
      </nav>
      //fallback에 비동기 작업이 끝나기 전까지 렌더링 될 컴포넌트 넣어둠
      <Suspense fallback={<div>로딩 중</div>}>
        {pages[page]}
      </Suspense>
    </>
```


![suspense1](https://user-images.githubusercontent.com/86187456/205493279-c83d4a43-62ce-4942-b7cc-af3a4a94ddc9.png)
![suspense2](https://user-images.githubusercontent.com/86187456/205493280-1f5885a7-a991-4f7f-9742-d2611474465a.png)



<br />
# React.lazy
- React.lazy로 불러온 컴포넌트는 단독으로 쓰일 수 없고, React.Suspense 컴포넌트로 하위에서 렌더링되어야 한다.

>사용법<br />
>React 공식 문서에 따르면 Router 바로 아래에 Suspense를 위치시키고, Route로 보여줄 컴포넌트들을 React.lazy로 불러올 것을 권장함

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

>suspense와 react.lazy의 다른 예시

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


```

const AvatarComponent = lazy(() => import('./AvatarComponent'));
const InfoComponent = lazy(() => import('./InfoComponent'));
const MoreInfoComponent = lazy(() => import('./MoreInfoComponent'));

const renderLoader = () => <p>Loading</p>;

const DetailsComponent = () => (
  <Suspense fallback={renderLoader()}>
    <AvatarComponent />
    <InfoComponent />
    <MoreInfoComponent />
  </Suspense>
)
```
