import { useState } from "react";

export default function CommentItem({ el }) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {isEdit ? (
        <input type='text' />
      ) : (
        <div key={el._id}>
          <span style={{ margin: "10px" }}> {el.title}</span>
          <span style={{ margin: "10px" }}> {el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      )}
    </div>
  );
}
