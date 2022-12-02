# React conText 관련

- 하위의 컴포넌트에서 부모의 props, 데이터를 사용하기 위함
- context를 사용시 컴포넌트를 재사용하기 어려워 질 수 있다.
- 다양한 레벨에 있는 많은 컴포넌트에게 부모의 데이터를 전달하기 위함(전역적인 데이터)
- Prop driling을 피하기 위한 목적이라면 Component Composition를 먼저 고려 해야 한다.

#### createContext("초기값") -> Context.provider로 묶에 주지 않으면 초기값를 다른 컴포넌트에 건네주게됨


</br>
</br>

>react Context 만드는 법(context.tsx 생성)
```
import {createContext} from 'react'

export const Context = createContext<string | null>(null);
```

>context 사용 
```
            <Context.Provider value={전달할 값}>
                <컴포넌트1>
                <컴포넌트2>
                <컴포넌트3>
            </Context.Provider>
```
</br>

>전달 받은 context값 사용
```
import { useContext } from "react";
//전달받은 값 받음
const data = useContext(Context);
```

