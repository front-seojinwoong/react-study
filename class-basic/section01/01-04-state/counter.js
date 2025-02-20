const 카운터 = () => {

  const [count, setCount] = React.useState(0);

  const handleUpCount = () => {
    setCount(count + 1);
  }
  const handleDownCount = () => {
    setCount(count - 1);
  }

  // 함수의 리턴은 1개만 할 수 있음 => 따라서 하나로 묶자.
  return (
    <>
      <div>{count}</div>
      <button onClick={handleUpCount}>카운트올리기</button>
      <button onClick={handleDownCount}>카운트내리기</button>
    </>
  )
}