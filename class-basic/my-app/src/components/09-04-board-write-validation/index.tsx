"use client";

import { gql, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const CREATE_BOARD = gql`
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
const UPDATE_BOARD = gql`
  mutation updateBoard(
    $myNumber: Int
    $myWriter: String
    $myTitle: String
    $myContents: String
  ) {
    updateBoard(
      number: $myNumber
      writer: $myWriter
      title: $myTitle
      contents: $myContents
    ) {
      _id
      number
      message
    }
  }
`;

const BoardsWrite = (props) => {
  const router = useRouter();
  const params = useParams();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };
  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        myWriter: writer,
        myTitle: title,
        myContents: contents,
      },
    });
    alert("등록이 완료되었습니다!");
    router.push(
      `/section09/09-04-boards-validation/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const result = await updateBoard({
      variables: {
        myNumber: Number(params.number),
        myWriter: writer,
        myTitle: title,
        myContents: contents,
      },
    });
    alert("수정이 완료되었습니다!");
    router.push(
      `/section09/09-04-boards-validation/${result.data.updateBoard.number}`
    );
  };

  return (
    <div>
      작성자 :
      <input
        type='text'
        onChange={onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목 :
      <input
        type='text'
        onChange={onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용 :
      <input
        type='text'
        onChange={onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </div>
  );
};

export default BoardsWrite;
