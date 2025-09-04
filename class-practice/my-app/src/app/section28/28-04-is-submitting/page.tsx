"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function IsSubmittingPage() {
  // react-hook-form에 이미 만들어져 있음
  // const { formState } = useForm();
  // formState.isSubmitting

  const [isSubmit, setIsSubmit] = useState(false);

  const onClickSubmit = async () => {
    setIsSubmit(true);

    const result = await fetch(
      "http://main-example.codebootcamp.co.kr/board/1"
    );
    const data = await result.json();
    console.log("data", data);
    setIsSubmit(false);
  };
  return (
    <button onClick={onClickSubmit} disabled={isSubmit}>
      게시글 등록하기
    </button>
  );
}
