"use client";

import React, { useState } from "react";
import { Rate } from "antd";

const LibraryStarPage = () => {
  const [value, setValue] = useState(3);

  // === 1단계 방식 => onChange는 Antd 개발자들이 만든 가짜 onChange임(value 들어옴) ===
  const onChangeStar = (value) => {
    setValue(value);
  };

  // 2단계 방식
  const onChangeStar = (value) => setValue(value);

  return <Rate onChange={onChangeStar} value={value} />;

  // return <Rate onChange={setValue} value={value} />;
};

export default LibraryStarPage;
