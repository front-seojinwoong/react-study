"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

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

// 프론트엔드에서 import 자체를 하지않고 브라우저에서만 불러오게끔하는 import 하는 코드
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

function WebEditorPage() {
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  // ReactQuill 만든 사람들이 만들어 놓은 onChange => 따라서, event 안들어옴
  const onChangeContents = (value) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값 넣어주기!
    setValue("contents", value);

    // 값만 넣지말고, 변경을 감지해서 검증 같은 것들도 해줘!
    trigger("contents");
  };

  const onSubmit = async (data) => {
    // event.preventDefault();  // handleSubmit에서 자동으로 preventDefault() 해줌
    console.log(data);

    // 여기서 그래프 큐엘 요청하기
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          ...data,
          // writer: data.writer,
          // password: data.password,
          // title: data.title,
          // contents: data.contents,
        },
      },
    });

    const { Modal } = await import("antd"); // 코드 스플릿팅
    Modal.success({ content: "게시글 등록에 성공하였습니다" });

    const boardId = result.data.createBoard._id;
    router.push(`/section30/30-02-web-editor-hook-form/${boardId}`);
  };

  // 백그라운드에서 몰래 받기도 함
  // useEffect(() => {
  //   const { Modal } = await import('antd');
  // })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      작성자: <input type='text' {...register("writer")} />
      비밀번호: <input type='password' {...register("password")} />
      제목: <input type='text' {...register("title")} />
      내용: <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}

export default WebEditorPage;
