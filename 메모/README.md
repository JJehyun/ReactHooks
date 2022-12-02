# React REF 관련
- HTML요소에 직접 접근해서 DOM API이용후 제어할 때 사용하는 props
<center>
< Ref의 값은 컨포넌트의 생명주기를 통해 값이 유지 됨 ></br>
<변화는 감지 해야하지만 변화가 랜더링을 발생시키면 안되는 값을 다룰때 사용하는 것>
</center>
</br>
</br>

1.Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨</br>
2.State의 변화 -> 렌더링 -> Ref의 값은 그대로 유지됨

>inputRef 객체의 current 속성을 통해 
```
import React, { useRef } from "react";

const countRef = useRef("초기값");

//ref 함수 활용
const upRef = () =>{
    countRef.current = countRef.current + 1;
}

//값
<p>{countRef.current}</p>
```


>React - Dom 새창을 열면 input에 focus
```
    const inputRef = useRef<HTMLInputElement>(null);

     useEffect(()=>{
        if(inputRef.current)
        inputRef.current.focus();
     },[])

     <input ref={inputRef} type="text" placeholder=""></input>

```
## javascript에서 특정 Dom을 선택하는 역할 ex) getElementById
- 특정 DOM에 접근할 때 사용한다.
- 외부 라ㅣ브러리 사용할때 유용하다.
- 원하는 위치에 ref={} 의 형태로 작성하면 된다.
- 포커스를 잡으려면 nameInput.current.focus() 형태로 작성하면 된다.