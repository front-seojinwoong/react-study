"use client";

import { CloseSquareOutlined } from "@ant-design/icons";
import { MouseEvent } from "react";

// 대부분의 아이콘 라이브러리들은 <span/>를 부모로 하여 내부에 아이콘 이미지가 자식으로 들어감
// 이미지 클릭시 부모로 onClick 이벤트가 전파됨
const handleRemoveItem = (event: MouseEvent<HTMLSpanElement>) => {
  alert(`${event.currentTarget.id}를 정말로 삭제하십니까?`);
};

const LibraryIconPage = () => {
  return (
    <div>
      <CloseSquareOutlined id='삭제할게시글ID' onClick={handleRemoveItem} />
    </div>
  );
};

export default LibraryIconPage;
