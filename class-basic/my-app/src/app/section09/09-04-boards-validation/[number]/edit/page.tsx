"use client";

import BoardsWrite from "@/components/09-04-board-write-validation";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($mynumber: Int) {
    fetchBoard(number: $mynumber) {
      number
      writer
      title
      contents
      like
      createdAt
    }
  }
`;

const BoardsDetailEditPage = () => {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { mynumber: Number(params.number) },
  });
  return <BoardsWrite isEdit={true} data={data} />;
};

export default BoardsDetailEditPage;
