# React hook 정리 중(branch, 예제 코드 참조)

- useRef </br>
- Context API (전역 데이터 관리)
- useMemo (컴포넌트 기능 최적화(변수))
- use Callback (컴포넌트 기능 최적화(함수))
- useReducer (state 생성,관리)
- React.memo (컨포넌트 기능 최적화(컴포넌트))

![REACT MEMO1](https://user-images.githubusercontent.com/86187456/205433976-82df2eeb-bd4d-414e-acdd-1cb8128b0bd6.png)
![REACT MEMO2](https://user-images.githubusercontent.com/86187456/205433979-4bf4852d-9235-4515-b351-9a78e6691c0e.png)

## React React.memo(Memoization)

<prop check를 통해 변화가 있으면 재렌더팅, 없으면 기존의 컴포넌트 사용>

- React.memo란 react에서 제공하는 고착(HOC) 컴포넌트이다.
- 고착 컴포넌트란, 하나의 컴포넌트를 받아서 최적화된 컴포넌트로 반환해주는 함수
- React.memo는 렌더링 될때마다 Prop check를 해서 컴포넌트의 변화가 있는지 없는지 확인을 한다.
- 무분별하게 사용하면 메모리의 공간을 너무 많이 차지하게 됨

---

<br />

## React.memo 사용할 때

1.컴포넌트가 같은 prop로 자주 렌더링 될 때<br/> 2.컴포넌트가 렌더링 될 때 마다 복잡한 로직을 처리 해야 할 때

---

</br>

> memo함수 실행 과정</br>
> 1.memo라는 고착 컴포넌트는 two라는 컴포넌트를 받는다.</br> 2.다시 memo는 최적화된 two 컴포넌트 return한다.
> </br> </br>

> 사용법

```
import React, { memo } from "react";

///최적화 할 컴포넌트를 memo로 감싸준다.
export default memo(Two);
```

