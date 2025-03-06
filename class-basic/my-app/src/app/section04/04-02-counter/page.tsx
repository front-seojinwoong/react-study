"use client"; // 리액트 구버전 방식으로 실행해줘! (이거 없으면 useState를 못씀) => 신버전 방식은 뒤에서 배움.

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleUpCount = () => {
    setCount(count + 1);
  };
  const handleDownCount = () => {
    setCount(count - 1);
  };

  // 함수의 리턴은 1개만 할 수 있음 => 따라서 하나로 묶자.
  return (
    <>
      <div>{count}</div>
      <button onClick={handleUpCount}>카운트올리기</button>
      <button onClick={handleDownCount}>카운트내리기</button>
    </>
  );
};

export default Counter;
