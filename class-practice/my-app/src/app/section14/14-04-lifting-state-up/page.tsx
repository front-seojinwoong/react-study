"use client"; // 리액트 구버전 방식으로 실행해줘! (이거 없으면 useState를 못씀) => 신버전 방식은 뒤에서 배움.

import Child1 from "@/components/14-04-lifting-state-up/Child1";
import Child2 from "@/components/14-04-lifting-state-up/Child2";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleUpCount = () => {
    setCount(count + 1);
  };

  // 함수의 리턴은 1개만 할 수 있음 => 따라서 하나로 묶자.
  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <div>====================================</div>
      <Child2 count={count} handleUpCount={handleUpCount} />
    </>
  );
};

export default Counter;
