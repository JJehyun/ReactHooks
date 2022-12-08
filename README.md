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
- GraphQL & Apollo (REST API Underfetching 문제 해결)

---

![123](https://user-images.githubusercontent.com/86187456/205962995-34f46377-ea46-4ae0-814e-03adf15b3d9c.png)
![graphQL와 Rest의 차이점](https://user-images.githubusercontent.com/86187456/205963006-8fb06dfb-6934-442d-977f-1f50359d21da.png)

## GraphQL & Apollo

- 응답한 서버 데이터를 웹 브라우저의 캐시에 저장 , 재사용
- > 클라이언트가 자신에게 필요한 데이터에 대한 쿼리를 만들어서 GraphQL에
  > 보내면<br /> GraphQL은 Query 해석해 서버에서 필요한 데이터만 가져온 후 클라이언트에게 다시 보냄
- GraphQL은 여러 계층의 정보들을 한 번에 받아올 수 있음 (Underfetching 문제를 해결한다.)<br />-->REST API의 N+1 Problem을 해결 할 수 있다
- 요청 횟수 감소
- > REST API에서는 각 요청은 해당 엔드포인트에 정의된 핸들링 함수를 호출하여 작업을 처리<BR />GraphQL에서는 요청 받은 각 필드에 대한 resolver를 호출하여 작업함

---

## Apollo 서버 실행

- typeDefs : GraphQL 명세에서 사용될 데이터, 요청의 타입 지정
- revsolver : 서비스의 액션들을 함수로 지정, 요청에 따라 데이터 반환 , 입력 , 수정,삭제 실행

---

# Apollo 서버 실행과 모듈화

> index.js Apollo 서버 실행과 모듈화

```js
//index.js
const { ApolloServer } = require("apollo-server");

const queries = require("./typedefs-resolvers/_queries");
const mutations = require("./typedefs-resolvers/_mutations");
const equipments = require("./typedefs-resolvers/equipments");

//테이블 형식, 반환 타입 지정 (Array or Object)
const typeDefs = [queries, mutations, equipments.typeDefs];

//Query 실행
const resolvers = [equipments.resolvers];

//typeDefs, resolvers 를 인자로 받아서 생성자로 Apollo서버를 실행함
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Apollo Server 실행이닷 ${url}`);
});
```

<br />
SQL (UPDATE , INSERT, DELETE 같은 기능)

> mutations.js (삭제 , 수정 , 삽입 관련 형식과 , 반환 타입 지정)

```js
const { gql } = require("apollo-server");
//Mutation - insert, update , delete 요청
const typeDefs = gql`
  type Mutation {
    deleteEquipment(id: String): Equipment
  }
`;
module.exports = typeDefs;
```

SQL (SELECT 같은 기능)

> queries.js (검색 관련 형식과 , 반환 타입 지정)

```js
//Query - get 요청
const typeDefs = gql`
  type Query {
    equipments: [Equipment]
  }
`;
module.exports = typeDefs;
```

> equipments 테이블 지정 , resolvers

```js
const typeDefs = gql`
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
`;
const resolvers = {
  //검색
  Query: {
    equipments: (parent, args) => dbWorks.getEquipments(args),
  },
  //삭제
  Mutation: {
    deleteEquipment: (parent, args) => dbWorks.deleteItem("equipments", args),
  },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
```

---

<br />

## React Client

> 라이브러리 install

```bash
$ npm install @apollo/client graphql
```

> 실 사용(ApolloProvider) - SELECT

- url : 서버 주소
- cache : GraphQL이 한번 받아온 정보를 필요이상으로 다시 요청하지 않도록 캐시를 관리하는 역할

> useQuery 간단 사용 (1)

```js
// ROOT directory
import { QueryClient,QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

<QueryClientProvider client={client}>
//GraghQL를 사용해서 받은 데이터를 그려줄 컴포넌트
  <컴포넌트>
    ...
  </컴포넌트들>
</QueryClientProvider>
```

> useQuery 간단 사용(2) 끝

```js
let result = useQuery("아무이름",()=>
  axios.get("localhost:8080/users").then((a)=>{
  return a.data
  }),
  {staleTime : 2000} //refetch 간격 조정
)

//useQuery return값 활용 예시
<div>
    {result.isLoading && "로딩중.."}
    {result.error && "에러.."}
    {result.data && result.data}
</div>
<>
```

<br />

  <br />
  <br />

![useQ](https://user-images.githubusercontent.com/86187456/205963107-fd10d895-0f5c-4077-b0cb-c6f499c8458a.png)

# useQuery(SELECT)

## useQuery(...)

- > queryKey : queryKey가 같으면 서버에 따로 요청하지 않고 저장된 값을 사용한다. <br/>데이터 캐싱을 관리 , 문자열 또는 배열로 지정
- > staleTime : 데이터가 fresh 상태로 유지되는 시간 , 시간이 지나면 refetch
- > cacheTime : inactive 상태인 캐시 데이터가 메모리에 남아있는 시간 , 시간이 지나면 refetch
- > queryFn : promise 처리가 이루어지는 함수 (AXIOS를 이용해 API요청하는 코드)
- > refetch : staleTime , cacheTime 둘 중 하나라도 만족하지 않으면 계속해서 서버에 데이터를 요청함(stale 데이터)

## useQuery() return 값

- > loading : GraphQL에게 데이터를 받아오는 잠시 동안의 return 값
- > error : 잘못된 쿼리로 오류가 발생했을 때의 return 값
- > data : GraphQL서버에서 가져온 데이터
- > refetch : refetch() 실행하면 다시 쿼리를 보내 가장 최신의 데이터를 다시 받아옴

<br />

> 예제 코드(1)

```js
ex)$ const { loading, error, data, refetch... } = useQuery(['persons', id],
 () => axios.get('http://localhost:8080/persons', {params: {id: id,}}) ,
 {
    staleTime: 5000,        // 신선하지 않은 데이터 -> 5초 마다 refetch
    cacheTime: 50000,       // 캐싱 처리가 이루어지는 시간 ->5분 마다 refetch
    onError : (error) => {} // 쿼러 실패 시 실행되는 함수
},{
  enable:!!id               //id가 존재 할 때만 쿼리 요청한다는 옵션
}
);

or

ex2)$ const res = useQuery({
    queryKey: ['persons', id],
    queryFn: () => axios.get('http://localhost:8080/persons'{params: {id: id,}}),
    staleTime: 5000,          // 5초
    cacheTime: Infinity       // 제한 없음
    enable:!!id               //id가 존재 할 때만 쿼리 요청한다는 옵션
});
```

<br />

> 예제 코드(2)

```js
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

//서버로 보낼 쿼리문
const GET_ROLES = gql`
  query GetRoles {
    roles {
      id
    }
  }
`;
const { loading, error, data, refetch } = useQuery(GET_ROLES);
if (loading) return <p>로딩 중입니다.</p>;
if (error) return <p>에러입니다.</p>;
console.log(data);
refetch();
return (
  <>
    <여러컴포넌트들></여러컴포넌트들>
  </>
);
```

<br />
<br />

# useMutation(Insert , Update , Delete)

- > React Query를 이용해서 서버의 데이터 변경작업을 요청할 때 사용함
- > mutate 은 useMutation가 return하는 함수로 useMutation를 실행하는 함수

## useMutation(...)

- > mutationKey 문자열 | 배열
- > mutationFn 서버와 통신할 promise 처리가 이루어지는 api 함수를 의미한다 (axios를 이용해 서버에 API 요청)
- > options : 쿼리에 관한 옵션 (onSuccess ,onError , onSettled )

## useMutation return값

- > mutate : useMutation을 이용해 작성한 내용들이 실행될 수 있도록 도와주는 trigger 역할
- > invalidateQueries() : seQuery에서 사용되는 queryKey의 유효성을 제거해주는 목적 (= 서버로 부터 다시 데이터를 가져오기 위함)<br />invalidateQueries를 이용해 useQuery가 가지고 있던 queryKey의 유효성을 제거해주면 캐싱되어있는 데이터를 화면에 보여주지 않고 서버에 새롭게 데이터를 요청함

```js
const queryClient = useQueryClient();  // 등록된 quieryClient 가져오기



ex1) const savePerson = useMutation(
  (person) => axios.post("http://localhost:8080/savePerson", person),
  {
    onSuccess: () => {
      queryClient.invalidateQueries('persons'); // queryKey 유효성 제거  화면에 업데이트된 데이타를 보여주기 위함
      // 요청이 성공한 경우
    },
    onError: (error) => {
      // 요청에 에러가 발생된 경우
    },
    onSettled: () => {
      // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
    },
  }
);


ex2) const savePerson = useMutation({
  mutationFn: (person) => axios.post("/savePerson", person),
  onSuccess: () => {
    queryClient.invalidateQueries('persons'); // queryKey 유효성 제거  화면에 업데이트된 데이타를 보여주기 위함
    // 요청이 성공한 경우
  },
  onError: (error) => {
    // 요청에 에러가 발생된 경우
  },
  onSettled: () => {
    // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
  },
});

//useMutation 실행 trigger
<button onClick={savePerson.mutate("perseon")}></button>;
```

<br />
<br />
<br />
<br />
<br />

## 서버 실행

> 기본 예제 (get 요청)

```js
$ npm i graphql apollo-server
const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')

//데이터베이스 테이블 형식, 반환 형식 지정
const typeDefs = gql`
  type Query {
    //반환 형식
    teams: [Team]
    supplies: [Supply]
    team(id : Int) : Team
  }
    //테이블 구조
    type Team {
        id: Int
        name : string
        grade : Int
    }
    type Supply {
        id: String
        team: Int
    }
`
//Query 실행 함수 반환
const resolvers = {
  Query: {
    teams: () => database.teams,
    supplies: () => database.supplies,
    team: (parent, args, context, info) =>
        database.teams.filter((team) => {
        return team.id === args.id;
    })[0];
  }
}

//apollo-server 모듈에서 typeDefs ,resolvers 인자로 받아서 생성자로 서버를 실행함
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`)
})
```

<br />
<br />

---

> 기본 예제Mutation (update,delete,insert 요청)

```js
const typeDefs = gql`
  type Query {
    ...
  }
  //update,delete,insert 형식 , 반환값 지정
  type Mutation {
    deleteEquipment(id: String): Equipment
    insertEquipment(id: String): Equipment
    editEquipment(used_by: String): Equipment
  }
  //반환 데이터 형식 지정
    type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
`;

const resolvers = {
  Query: {
    ... get 요청
  },
  Mutation: {
    //insert
    insertEquipment: (parent, args, context, info) => {
      database.equipments.push(args);
      return args;
    },
    //delete
    deleteEquipment: (parent, args, context, info) => {
      const deleted = database.equipments.filter((equipment) => {
        return equipment.id === args.id;
      })[0];
      database.equipments = database.equipments.filter((equipment) => {
        return equipment.id !== args.id;
      });
      return deleted;
    },
    editEquipment : (parent, args, context, info) => {
        ...edit관련 로직
    }
}

}
```
