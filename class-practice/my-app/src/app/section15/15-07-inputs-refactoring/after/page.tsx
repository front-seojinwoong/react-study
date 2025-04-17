"use client";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  # mutation createBoard(
  #   $writer: String
  #   $title: String
  #   $contents: String
  # ) {
  #   createBoard(writer: $writer, title: $title, contents: $contents) {
  #     _id
  #     number
  #     message
  #   }
  # }
`;

export default function GraphQlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    // 여기서 그래프 큐엘 요청하기
    const result = await 나의함수({
      variables: {
        ...inputs,
      },
    });
    console.log("result 출력하기", result);
  };

  const onChangeInputs = (e) => {
    // setInputs({ ...inputs, [e.target.id]: e.target.value }); 이걸로 하거나
    setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value })); // 이걸로 하거나, 특별한 요구사항이 없다면 보통 이렇게 사용할것.
  };

  // 한 줄일때는 괄호 () 필요없음
  return (
    <div>
      작성자 : <input id='writer' type='text' onChange={onChangeInputs} />
      <br />
      제목 : <input id='title' type='text' onChange={onChangeInputs} />
      <br />
      내용 : <input id='contents' type='text' onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL API 요청하기</button>
    </div>
  );
}
