"use client";

const Child1 = () => {
  const { count, setCount } = useCountStore();

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return <div></div>;
};

export default Child1;
