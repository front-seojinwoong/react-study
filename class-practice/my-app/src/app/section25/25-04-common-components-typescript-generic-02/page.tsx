"use client";

import { useMutation, gql } from "@apollo/client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISchema, schema } from "./schema";
import { InputSoftFull } from "@/commons/ui/25-04-input-base-typescript-generic-02";
import { ButtonSoftMFull } from "@/commons/ui/25-04-buttton-base-typescript-generic-02";

export default function GraphQlMutationPage() {
  const methods = useForm<ISchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: ISchema) => {
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onClickSubmit)}>
        {/* 작성자 : <input type='text' {...register("writer")} />
          <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
          <br /> */}
        {/* 제목 : <input type='text' {...register("title")} />  아래로 대체 1*/}
        {/* 제목(함수) :{InputSoftFull<ISchema>({ type: "text", keyname: "title" })} */}
        제목(컴포넌트) : <InputSoftFull<ISchema> type='text' keyname='title' />
        <div style={{ color: "red" }}>
          {methods.formState.errors.title?.message}
        </div>
        <br />
        {/* 내용 : <input type='text' {...register("contents")} /> */}
        {/* 내용(함수) :
        {InputSoftFull<ISchema>({ type: "text", keyname: "contents" })} */}
        내용(컴포넌트) :{" "}
        <InputSoftFull<ISchema> type='text' keyname='contents' />
        <div style={{ color: "red" }}>
          {methods.formState.errors.contents?.message}
        </div>
        <br />
        {/* 주소 : <input type='text' {...register("boardAddress.adressDetail")} /> */}
        {/* <button disabled={!methods.formState.isValid}>
          GRAPHQL API 요청하기
        </button> */}
        <ButtonSoftMFull<ISchema>>GRAPHQL API 요청하기</ButtonSoftMFull>
      </form>
    </FormProvider>
  );
}

/*
  <form>
    <button type="button"></button> // 내가 onClick 추가하고 싶을때!
    <button type="reset"></button> // 폼 안에 있는 인풋들 초기화하고 싶을때!
    <button type="submit"></button> // 폼 등록/수정 등 하고 싶을떄! => 디폴트값!
  </form>
*/
