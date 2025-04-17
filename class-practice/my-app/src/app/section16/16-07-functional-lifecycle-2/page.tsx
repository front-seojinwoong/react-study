"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("그려지고 나서 실행!!");

    return () => {
      console.log("사라지기 전에 실행!");
    };
  }, []); // 의존성 배열 => 여기에는 state, props가 들어가야한다. let const 이런거는 넣으면 안된다. 작동하지 않는다.

  // 2. useEffect 잘못된 사용법 잘못사용의 결과는 1. 추가렌더링, 2. 무한루프
  // useEffect(() => {
  //   setCount(10);
  //   // useEffect 안에서 setState는 가급적 사용하지 않는다. cf) 절대 안되는것은 아님. 어쩔 수 없는 상황에서는 써도 된다. 단지 useEffect안에서 setState를 사용하는것이 성능적인 부분을 어느정도 포기하고 사용한다는 것만 인지하고있으면된다.

  //   setCount((prev) => prev + 1); // 이것은 절대로 안됨.무한 루프에 빠짐!
  // }, [count]);

  const handleUpCount = () => {
    setCount((prev) => prev + 1);
  };

  console.log("나는 언제 실행되게?");

  return (
    <>
      <div>{count}</div>
      <button onClick={handleUpCount}>카운트 올리는 버튼2</button>

      <Link href={"/"}>나가기</Link>
    </>
  );
}
