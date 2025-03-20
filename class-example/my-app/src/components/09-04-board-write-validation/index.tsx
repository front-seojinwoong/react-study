"use client";
import { gql, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
const UPDATE_BOARD = gql`
  mutation updateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
      like
      createdAt
    }
  }
`;

const BoardWrite = (props) => {
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
        writer,
        title,
        contents,
      },
    });
    alert("등록이 완료되었습니다!");
    router.push(
      `/section09/09-04-boards-validation/${result.data.createBoard.number}`
    );
  };
  const onClickUpdate = async () => {
    const myVariables = { number: Number(params.number) };
    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
      refetchQueries: [
        { query: FETCH_BOARD, variables: { number: Number(params.number) } },
      ],
    });
    alert("수정이 완료되었습니다!");
    router.push(
      `/section09/09-04-boards-validation/${result.data.updateBoard.number}`
    );
  };

  return (
    <div>
      작성자:{" "}
      <input
        type='text'
        onChange={onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:{" "}
      <input
        type='text'
        onChange={onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:{" "}
      <input
        type='text'
        onChange={onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </div>
  );
};

export default BoardWrite;
