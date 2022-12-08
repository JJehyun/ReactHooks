import { configureStore, createSlice } from "@reduxjs/toolkit";

//state 제작
let state = createSlice({
  name: "state이름",
  initialState: "value값",

  //state변경 함수 등록
  reducers: {
    //파라미터는 기존 state를 뜻함
    statechange(state) {
      return state + "변경 완료";
    },
    statechange2(state) {
      return state + "변경 완료2";
    },
  },
});

export let { statechange, statechange2 } = state.actions;

let state2 = createSlice({
  name: "state이름2",
  initialState: "value값2",
});

//store 생성
//state 등록
export default configureStore({
  reducer: {
    아무이름: state.reducer,
    아무이름2: state2.reducer,
  },
});
