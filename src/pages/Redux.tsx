import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "./App.css";
import { statechange } from "./store";
function Redux() {
  let a = useSelector((state) => {
    return state;
  });

  //reducer한테 요청을 보내주는 역할
  let dispatch = useDispatch();
  console.log(a);
  return (
    <div className="App">
      <div>{JSON.stringify(a)}</div>
      <button
        onClick={() => {
          dispatch(statechange());
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default Redux;
