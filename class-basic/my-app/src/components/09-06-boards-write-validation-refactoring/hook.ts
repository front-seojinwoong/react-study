"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "./queries";

export default function useBoardWrite(props) {
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
      `/section09/09-06-boards-validation-hooks-refactoring/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myVariables = { myNumber: Number(params.number) };

    if (writer) myVariables.myWriter = writer;
    if (title) myVariables.myTitle = title;
    if (contents) myVariables.myContents = contents;

    const result = await updateBoard({
      variables: myVariables,
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { mynumber: Number(params.number) },
        },
      ],
    });
    alert("수정이 완료되었습니다!");
    router.push(
      `/section09/09-06-boards-validation-hooks-refactoring/${result.data.updateBoard.number}`
    );
  };

  return {
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    onClickSubmit,
    onClickUpdate,
  };
}
