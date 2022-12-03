# React useCallback 관련
1. Memoization 기법으로 컴포넌트 성능을 최적화하는 도구이다.
2. Memoization기법이란 반복적으로 계산해야하는 값을 cash 해서 메모리에서 cash된 값을 가져오는 기법
3. 콜백함수 그자체를 Memoization 하는 것, 필요할 때마다 메모리에 있는 함수를 호출하는 것
4. 함수,객체,배열이 참조하는 주소값을 처음값으로 고정
</br>
</br>
- 자바스크립트객체(함수,객체,배열) 값은 메모리 주소가 참조
- 랜더링될 때 마다 자바스크립트 객체는 새로운 주소를 참조하게 됨
</br>
</br>

> - 컴포넌트가 다시 랜더링이 되러다도 calculate함수가 초기화 되는 것을 막을 수 있다.
> - 컴포넌트가 처음 랜더링이 될때만 함수 객체를 만들고, 다시 랜더링 될때는 전에 만들어둔 함수객체를 재사용하는 기법
```
function Component(){
    const calculate = useCallback((num)=>{
        return ~~~
    },[item]);

    return <div>컴포넌트</div>
}


```

</br>

>useCallback 구조
```
function Component(){
    // Memoization 할 함수 선언
    const calculate = useCallback((num)=>{
        return ~~~
    // [item] 의존성 배열 , 의존성 배열의 변할 때 Memoization된 함수를 다시 할당
    },[item]);

    return <div>컴포넌트</div>
}


```
