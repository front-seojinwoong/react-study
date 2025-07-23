"use client";

import { useCountStore } from "@/commons/stores/21-03-count-store-exercise";

const Child1 = () => {
  const { count, setCount } = useCountStore();

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>자식2의 카운트: {count}</div>
      <button onClick={onClickCountUp}>카운트올리기</button>
    </>
  );
};

export default Child1;
