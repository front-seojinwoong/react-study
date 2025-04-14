"use client";

export default function Child1({ count, setCount }) {
  const onClickCountUp = () => {
    setCount(count + 1); // prev도 가능함
  };

  return (
    <>
      <div>자식1의 카운트: {count}</div>
      <button onClick={onClickCountUp}>카운트올리기</button>
    </>
  );
}
