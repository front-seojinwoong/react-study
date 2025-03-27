"use client";

import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

const ModalCustomPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleComplete = (data) => {
    console.log(data);
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        게시글 내용 입력: <input type='text' />
      </Modal>

      {isModalOpen && (
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default ModalCustomPage;
