"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { gql, useMutation } from "@apollo/client";

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

// 라이브러리를 프론트엔드 서버가 아니라 브라우저에서만 적용시키는 방법
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const WebEditorPage = () => {
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // ReactQuill 만든 사람들이 만들어 놓은 onChange => 따라서 event 안 들어옴.
  const onChangeContents = (v) => {
    console.log("밸류 찍어보기", v);

    // register로 등록하지 않고, 강제로 값 넣어주기!
    setValue("contents", v);

    // 값만 넣지 말고, 변경을 감지해서 검증같은 것도 하려면 trigger써야함.
    trigger("contents");
  };

  // 백그라운드에서 몰래 받기도 가능
  // useEffect(() => {
  //   const { Modal } = await import("antd");
  // }, []);

  const onSubmit = async (data) => {
    // event.preventDefault(); handleSubmit에서 자동으로 preventDefault() 해줌
    console.log(data);

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
    Modal.success({ content: "게시글 등록에 성공하였습니다!" });

    const boardId = result.data.createBoard._id;
    router.push(`/section30/30-02-web-editor-hook-form/${boardId}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        작성자: <input type='text' {...register("writer")}></input>
        비밀번호: <input type='password' {...register("password")}></input>
        제목: <input type='text' {...register("title")}></input>
        내용: <ReactQuill onChange={onChangeContents} />
        <button>등록하기</button>
      </form>
    </>
  );
};

export default WebEditorPage;
