const 카운터 = () => {

  const [ count, setCount ] = React.useState(0);

  const handleUpCount = () => {
    setCount(count + 1);
  }
  const handleDownCount = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handleUpCount}>숫자올리기</button>
      <button onClick={handleDownCount}>숫자내리기</button>
    </>
  )
}
