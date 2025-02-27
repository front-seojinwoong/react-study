import { useState } from "react";

const Board1 = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isActive, setIsActive] = useState(false);

  const handleChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value && title && content) setIsActive(true);
    else setIsActive(false); 
  }
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    if (writer && e.target.value && content) setIsActive(true);
    else setIsActive(false);

  }
  const handleChangeContent = (e) => {
    setContent(e.target.value);
    if (writer && title && e.target.value) setIsActive(true);
    else setIsActive(false);

  }

  const handleSubmit = () => {
    console.log('writer', writer);
    console.log('title', title);
    console.log('content', content);
    alert('게시글 등록에 성공하였습니다.');
  }

  return (
    <>
      작성자: <input type="text" onChange={handleChangeWriter}/><br/>
      제목: <input type="text" onChange={handleChangeTitle}/><br/>
      내용: <input type="text" onChange={handleChangeContent}/><br/>
      <button onClick={handleSubmit} style={isActive ? { color: "red", backgroundColor: "yellow" } : null}>등록하기</button>
    </>
  )
}

export default Board1