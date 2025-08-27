"use client";
const RestGetPage = () => {
  const onClickAsync = () => {
    const result = fetch("https://koreanjson.com/posts/1");
    console.log("result확인", result);
  };
  const onClickSync = async () => {
    const result = await fetch("asdasasd");
    const data = await result.json();
    console.log("data확인", data);
    console.log("data.title 확인", data.title);
  };
  return <div>RestGetPage</div>;
};

export default RestGetPage;
