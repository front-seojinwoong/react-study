"use client";

import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { UPDATE_BOARD, 나의그래프큐엘셋팅 } from "./queries";

const useBoardsWrite = () => {
  const router = useRouter()
  const params = useParams()

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [나의함수] = useMutation(나의그래프큐엘셋팅)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const onClickSubmit = async () => {
      const result = await 나의함수({
          variables: {               // variables 이게 $ 역할을 함
              writer: writer,
              title: title,
              contents: contents
          }
      })
      router.push(`/section09/09-05-boards-validation-container-presentational-example/${result.data.createBoard.number}`)
  }

  const onClickUpdate = async () => {
      const myvariables = { number: Number(params.number) }
      if(writer) myvariables.writer = writer
      if(title) myvariables.title = title
      if(contents) myvariables.contents = contents
      
      // 여기서 수정하기 하자!!
      const result = await updateBoard({
          variables: {
              number: Number(params.number),
              writer: writer,
              title: title,
              contents: contents
          }
      })
      router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`)
  }

  const onChangeWriter = (event) => {
      setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
      setTitle(event.target.value)
  }

  const onChangeContents = (event) => {
      setContents(event.target.value)
  }

  return {
    onClickSubmit,
    onClickUpdate,
    onChangeWriter,
    onChangeTitle,
    onChangeContents
  }
};

export default useBoardsWrite;
