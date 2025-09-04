"use client";

// import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
// import { Modal } from "antd";
import dynamic from "next/dynamic";

// 라이브러리를 프론트엔드 서버가 아니라 브라우저에서만 적용시키는 방법
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const WebEditorPage = () => {
  const [value, setValue] = useState("");

  // ReactQuill 만든 사람들이 만들어 놓은 onChange => 따라서 event 안 들어옴.
  const onChangeContents = (v) => {
    console.log("밸류 찍어보기", v);
  };

  // 백그라운드에서 몰래 받기도 가능
  // useEffect(() => {
  //   const { Modal } = await import("antd");
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { Modal } = await import("antd"); // 코드 스플릿팅
    Modal.success({ content: "게시글 등록에 성공하였습니다!" });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        작성자: <input type='text'></input>
        비밀번호: <input type='password'></input>
        제목: <input type='text'></input>
        내용: <ReactQuill onChange={onChangeContents} />
        <button>등록하기</button>
      </form>
    </>
  );
};

export default WebEditorPage;
