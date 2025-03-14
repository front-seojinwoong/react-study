"use client";

import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard(
    $myWriter: String
    $myTitle: String
    $myContents: String
  ) {
    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
      _id
      number
      message
    }
  }
`;

export default function GraphQlMutationPage() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    // try에 있는 내용을 시도하다가 실패하면, 그 아랫줄들을 무시하고 catch로 넘어감
    try {
      const result = await 나의함수({
        variables: {
          myWriter: writer,
          myTitle: title,
          myContents: contents,
        },
      });
      alert("게시글등록이완료되었습니다!");
      router.push(
        `/section07/07-04-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error);
    }
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
