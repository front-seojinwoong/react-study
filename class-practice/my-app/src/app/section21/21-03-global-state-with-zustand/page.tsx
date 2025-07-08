"use client"; // 리액트 구버전 방식으로 실행해줘! (이거 없으면 useState를 못씀) => 신버전 방식은 뒤에서 배움.
import Child1 from "@/components/21-03-global-with-zustand/Child1";
import Child2 from "@/components/21-03-global-with-zustand/Child2";

const Counter = () => {
  return (
    <>
      <Child1 />
      <div>====================================</div>
      <Child2 />
    </>
  );
};

export default Counter;
