/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import State from "./component/State";
import Box from "./component/Box";

function App() {
  //state 라는 거에 반응 하기 때문에 react\
  //리액트는 변수값이 업데이트 됐다고 UI를 재 렌더링 하지 않는다.
  //state가 변경 되었을때만 UI를 재 렌더링 한다.
  let num = 0;

  //usestate
  //1.import {useState} from 'react'
  //state를 사용하기 위해서 react 에서 useState를 데려온다
  //useState => 리액트에서 제공하는 함수 중 하나 (훅)
  //useState 함수가 무엇을 리턴하느냐?
  //아이템이 2개 들어있는 배열(Array)
  //1.초기값을 담고있는 state변수
  //2.state값을 변경할수 있도록 도와주는 set함수
  //이 두가지 값을 배열로 리턴한다.
  //state를 변수 처럼 사용하면 안되고, 값을 변경할 때는 항상 변경 함수를 호출 하고
  //값을 그 안에 집어 넣어야 한다.

  const [count, setCount] = useState(0);
  let increase = () => {
    num = num + 1;
    setCount(count + 1);
    //state값이 업데이트 될때마다 function App을 다시 실행 시키면서 변경된 UI를 업데이트
    //변수는 값을 저장하지 않고 함수가 호출될때마다 초기화 된다.
    console.log("num", num, "state", count);
  };

  // state의 값 반영이 한박자씩 늦는 이유
  // console log가 두번씩 찍히는 이유
  //app.js 에 자성한 내용은 index.js를 거쳐서  'root'라는 아이디 값을 div에 그려진다
  
  return (
    // <State></State>
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>+1</button>
      <Box></Box>
    </div>
  );
}

export default App;
