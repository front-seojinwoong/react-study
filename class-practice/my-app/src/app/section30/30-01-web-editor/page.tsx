"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useEffect } from "react";

// 프론트엔드에서 import 자체를 하지않고 브라우저에서만 불러오게끔하는 import 하는 코드
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

function WebEditorPage() {
  // ReactQuill 만든 사람들이 만들어 놓은 onChange => 따라서, event 안들어옴
  const onChangeContents = (value) => {
    console.log(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { Modal } = await import("antd"); // 코드 스플릿팅
    Modal.success({ content: "게시글 등록에 성공하였습니다" });
  };

  // 백그라운드에서 몰래 받기도 함
  // useEffect(() => {
  //   const { Modal } = await import('antd');
  // })

  return (
    <form onSubmit={onSubmit}>
      작성자: <input type='text' />
      비밀번호: <input type='password' />
      제목: <input type='text' />
      내용: <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}

export default WebEditorPage;
