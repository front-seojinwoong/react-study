"use client";

const CheckBox = () => {
  const qqq2 = () => {
    alert('2번 클릭');
  }
  const qqq3 = (e) => {
    e.stopPropagation();
    alert('3번 클릭');
  }
  return (
    <span onClick={qqq2}>
      <input type='checkbox' onClick={qqq3}/>
    </span>
  )
}

export default CheckBox