"use client";

import { Modal } from "antd";

const page = () => {
  const onClickSuccess = () => {
    Modal.success({
      content: "게시글 등록에 성공했습니다.",
    });
  };

  const onClickError = () => {
    Modal.error({
      title: "This is an error message",
      content: "게시글 등록에 실패했습니다",
    });
  };
  return (
    <>
      <button onClick={onClickError}>실패했을떄</button>
      <br />
      <button onClick={onClickSuccess}>성공했을때</button>
    </>
  );
};

export default page;
