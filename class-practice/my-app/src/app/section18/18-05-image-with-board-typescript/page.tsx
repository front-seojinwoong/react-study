"use client";

import { UploadFileDocument } from "@/commons/graphql/graphql";
import { checkValidationFile } from "@/commons/libraries/18-03-validation-file";
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UploadFileDocument);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type='file' multiple /> 일때, 여러개 드래그 가능

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  ////////////////////////////////////////////////////////////////////////////////

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    // 여기서 그래프 큐엘 요청하기
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password: "1234",
          images: [imageUrl],
        },
      },
    });
    console.log("result 출력하기", result);
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  return (
    <>
      작성자 : <input type='text' onChange={onChangeWriter} />
      <br />
      제목 : <input type='text' onChange={onChangeTitle} />
      <br />
      내용 : <input type='text' onChange={onChangeContents} />
      <br />
      <button
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </button>
      <input
        type='file'
        onChange={onChangeFile}
        multiple
        style={{ display: "none" }}
        ref={fileRef}
        accept='image/jpeg,image/png' // 1. jpg/jpeg 모두 가능, 2. 띄어쓰기 없이 ','로 구분하기
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} alt='' />
      <button onClick={onClickSubmit}>GRAPHQL API 요청하기</button>
    </>
  );
}
