import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useSWR from "swr";
import axios from "axios";

function App() {
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
    //trigger("/user/2")<-- 엔드 포인트 리프레쉬
  };

  console.log(data);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="App">
      {JSON.stringify(data)}
      <button
        onClick={() => {
          createItem();
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
