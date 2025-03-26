"use client";

import BoardWrite from "@/components/09-04-board-write-validation";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number) {
      number, writer, title, contents, like, createdAt 
    }
  }
`;

const BoardsValidationEditPage = () => {
  const params = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(params.number) }
  });

  return (<BoardWrite isEdit={true} data={data}/>)
};

export default BoardsValidationEditPage;
