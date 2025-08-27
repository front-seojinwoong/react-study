"use client";
import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphQlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    // 여기서 그래프 큐엘 요청하기
    const result = await 나의함수({
      variables: {
        seller: "철수",
        createProductInput: {
          name: "키보드",
          detail: "좋은키보드입니다.",
          price: 35000,
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

  // 한 줄일때는 괄호 () 필요없음
  return (
    <div>
      작성자 : <input type='text' onChange={onChangeWriter} />
      <br />
      제목 : <input type='text' onChange={onChangeTitle} />
      <br />
      내용 : <input type='text' onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL API 요청하기</button>
    </div>
  );
}
