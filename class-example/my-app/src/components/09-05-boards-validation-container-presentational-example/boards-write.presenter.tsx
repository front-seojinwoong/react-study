"use client";

const BoardsWriteUI = (props) => {
  return (
    <div>
  <div>@@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@</div>
  <div>
      작성자: <input type="text" onChange={props.onChangeWriter} />
      제목: <input type="text" onChange={props.onChangeTitle} />
      내용: <input type="text" onChange={props.onChangeContents} />
      <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
          {props.isEdit ? "수정" : "등록"}하기
      </button>
  </div>
  <div>@@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@</div>
</div>
  );
};

export default BoardsWriteUI;
