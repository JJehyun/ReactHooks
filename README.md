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
- GraphQL & Apollo (REST API Underfetching 문제 해결)
- React-SWR (캐쉬 관리, 데이터 관리)

---

<br />

## React-swr이란

- 캐시로 부터 데이터를 반환 후 fetch 요청을 하고 , 최종적으로 최신화된 데이터를 가져오는 전략이다.
- useSWR 은 한번 fetch 한 원격상태의 데이터를 내부적으로 캐시하고 다른 컴포넌트에서 동일한 상태를 사용하고자 할 경우 이전에 캐시했던 상태를 그대로 리턴해 주기 때문에 서로 다른 컴포넌트가 동일한 상태를 공유할 수 있다
- 로컬 상태변수를 원격 상태와 연결된 데이터 스트림으로써 바라볼 수 있도록 데이터 fetching 단계를 추상화한다.
- useSWR 은 한번 fetch 한 원격상태의 데이터를 내부적으로 캐시하고 다른 컴포넌트에서 동일한 상태를 사용하고자 할 경우 이전에 캐시했던 상태를 그대로 리턴해 주기 때문에 서로 다른 컴포넌트가 동일한 상태를 공유함

---

## fetcher(...)

- > fetch : 데이터를 fetch하는 도구, 비동기함수나 axios같은 도구를 사용할 수 있다.
- > key : 데이터 고유 식별자로 fetch에 전달할 인자로 보통 API URL(localhost:8080/users/1)을 사용한다.
- > onErrorRetry(options) : swr은 오류가 발생하면 다시 request를 계속 보냄, request를 다시 시도하는 것을 제어하는 옵션
- > revalidateIfStale(options) : 마운트될 때마다 갱신
- > revalidateOnFocus(options) : 브라우저가 포커스될 때 마다 갱신
- > revalidateOnReconnect(options) : 네트워크가 다시 연결될 때마다 갱신

## fetcher() return값

- > data : 반환된 값이 담김
- > error : fetch 프로미스가 거부될 때 담기는 값
- > mutate : mutate함수가 호출되면 해당 상태를 즉시 fetch하고 데이터를 갱신한다.

<br /> 
<br />

![swr](https://user-images.githubusercontent.com/86187456/206190960-17e2e0cc-58e6-42b2-8fe7-268dffe4bcc7.png)

> swr options
> <br />
> <br />

> 간단 예시(1)

```js
  const [name, setname] = useState<string>("김김김");
  const fetcher = async (url: string) => {
    const resp = await axios.get(url);
    return resp.data;
  };
  const { data, error, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/users/",
    fetcher,
    {
      //1초마다 api 업데이트를 시키는 옵션
      refreshInterval: 1000,
    }
  );

  //버튼 관련
  const createItem = async () => {
    //캐시 data update 후 화면에 재 랜더링
    mutate(
      [
        ...data,
        {
          name,
        },
      ],
      false
    );
    const resp = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    //비동기 작업 후 캐시 update
    mutate([...data, resp.data], false);
    //새로 refresh하고 싶은 엔드 포인트 넣으면 됨
    trigger("/user/2")<-- 엔드 포인트 리프레쉬
  };
```

<br />

---

> React-swr 기본 구조

```js
import useSWR from "swr";

function Profile() {
  const { data, error, isValidating, mutate } = useSWR(
    "/api/user",
    fetcher,
    options
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

<br />

> React-swr options examples

```js
const {data,error} = useDWR({key},fetcher,{
  onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
    // 상태코드 404 not Found에서는 더이상 시도하지 않음
    if (error.status === 404) return
    // 특정 key('/api/user')에서 재시도를 하지 않음
    if (key === '/api/user') return
    // 최대 10번까지만 시도
    if (retryCount >= 10) return
},{
     revalidateIfStale: false,
     revalidateOnFocus: false,
     revalidateOnReconnect: false
   }

)
```
