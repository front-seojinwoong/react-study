"use client";
import { useMutation, gql } from "@apollo/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";

export default function GraphQlMutationPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data) => {
    console.log(data);
    // // 여기서 그래프 큐엘 요청하기
    // const result = await 나의함수({
    //   variables: {
    //     myWriter: data.writer,
    //     myTitle: data.title,
    //     myContents: data.contents,
    //   },
    // });
    // console.log("result 출력하기", result);
  };

  console.log("리렌더링 되나요?");

  // 한 줄일때는 괄호 () 필요없음
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type='text' {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      <br />
      제목 : <input type='text' {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <br />
      내용 : <input type='text' {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <br />
      {/* 주소 : <input type='text' {...register("boardAddress.adressDetail")} /> */}
      <button disabled={!formState.isValid}>GRAPHQL API 요청하기</button>
    </form>
  );
}

/*
  <form>
    <button type="button"></button> // 내가 onClick 추가하고 싶을때!
    <button type="reset"></button> // 폼 안에 있는 인풋들 초기화하고 싶을때!
    <button type="submit"></button> // 폼 등록/수정 등 하고 싶을떄! => 디폴트값!
  </form>
*/
