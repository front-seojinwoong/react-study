"use client";

export default function Child2({ count, handleUpCount }) {
  return (
    <>
      <div>자식1의 카운트: {count}</div>
      <button onClick={handleUpCount}>카운트올리기</button>
    </>
  );
}
