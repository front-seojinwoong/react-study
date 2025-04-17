"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(1);

  // 1. componentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행!!");
    // 예) API 요청, 인풋 포커스 깜빡깜빡 등
  }, []);

  // 2. componentDidMount + componentDidUpdate와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행!");
  });

  useEffect(() => {
    // 3. componentWillUnmount와 동일 => clean-up function이라고 부름
    return () => {
      console.log("사라지기 전에 실행!");
      // 예) 채팅방 나가기 API 요청, 불필요한 타이머 삭제 등 (청소하기)
    };
  }, []);

  const handleUpCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleUpCount}>카운트 올리는 버튼2</button>

      <Link href={"/"}>나가기</Link>
    </>
  );
}
