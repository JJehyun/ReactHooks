# React Memo 관련
![memo1](https://user-images.githubusercontent.com/86187456/205335782-791303bf-ecd0-4d90-a50d-20ec187bf5d2.png)

- Memoization : 동일한 값을 리턴하는 함수를 여러번 호출할 때 맨 처음 호출한 함수의 리턴값을 메모리에 보관 후 메모리의 저장된 값을 사용하는 것
- 자주 계산한 값을 cash해서 필요할 때마다 cash에서 꺼내서 사용
- 렌더링 > 함수 호출 > 렌더링 > Memoize된 값을 사용
- 오래걸리는 연산을 메모리에 넣어두고 다시 연산하지 않도록 최적화하는 방법

- 배열-items- 안에 요소의 값이 업데이트 될 때만 callback함수를 호출해서 다시 Memoization를 한다
</br> 
</br>

> items 값이 변경될 때마다 다시 콜백함수를 계산해서 value에 삽입 
> useMemo 구조
```
const value = useMemo(
    ()=>{retrun 값1},[items]
)


!값1 이 value값에 들어가게 되고, items의 변수가 변경될 때만 다시 콜백함수를 계산하게됨
```
</br> 

> - useMemo의 구조 (콜백 함수 , 배열)
> - 맨 처음 한번만 Memoization 함
```
const value = useMemo(
    ()=>{},[]
)
```
