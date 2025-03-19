"use client";
import { useMutation, gql } from '@apollo/client';

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "철수", title: "공공주주", contents: "공동동동") {
      _id, number, message
    }
  }
`;

export default function GraphQlMutationPage() {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log('result 출력', result);
  }
  return (
    <button onClick={onClickSubmit}>GRAPHQL API REQUEST!</button>
  )
}
