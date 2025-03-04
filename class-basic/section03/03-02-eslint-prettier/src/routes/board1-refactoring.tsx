import { ChangeEvent, MouseEvent, useState } from "react";

const Board1 = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isActive, setIsActive] = useState(false);

  const isSubmitPossible = (writerData, titleData, contentData) => {
    return !!(writerData && titleData && contentData);
  };

  const handleChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    setIsActive(isSubmitPossible(e.target.value, title, content));
  };
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setIsActive(isSubmitPossible(writer, e.target.value, content));
  };
  const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    setIsActive(isSubmitPossible(writer, title, e.target.value));
  };
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    alert("전송완료!");
  };

  return (
    <div>
      <input type="text" onChange={handleChangeWriter} />
      <input type="text" onChange={handleChangeTitle} />
      <input type="text" onChange={handleChangeContent} />
      <button onClick={handleSubmit} disabled={!isActive}>
        submit
      </button>
    </div>
  );
};

export default Board1;
