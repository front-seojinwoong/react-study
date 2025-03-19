"use client";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`

const StaticRoutingMovedPage = () => {
  const params = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(params.boardNumber)
    }
  });
  return (
    <div>
      {data?.fetchBoard.number}번째 게시글입니다.<br/>
      제목: {data?.fetchBoard.title}<br />
      작성자: {data?.fetchBoard.writer}<br />
      내용: {data?.fetchBoard.contents}
    </div>
  )
};

export default StaticRoutingMovedPage;
