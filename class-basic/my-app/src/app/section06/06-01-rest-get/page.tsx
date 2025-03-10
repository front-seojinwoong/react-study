"use client"; // react17 구버전 대응해줘
const RestGetPage = () => {
  const onClickAsync = () => {
    const result = fetch("https://koreanjson.com/posts/1");
    console.log("result확인", result);
  };
  const onClickSync = async () => {
    const result = await fetch("https://koreanjson.com/posts/1");
    const data = await result.json();
    console.log("data확인", data);
    console.log("data.title확인", data.title);
  };

  return (
    <>
      <button onClick={onClickAsync}>REST API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST API(동기) 요청하기</button>
    </>
  );
};

export default RestGetPage;
