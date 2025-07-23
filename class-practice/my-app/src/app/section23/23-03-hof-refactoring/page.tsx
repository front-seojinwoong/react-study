"use client";

import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  // 1. 리팩토링 전
  // const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
  //   refetch({ page: Number(event.currentTarget.id) });
  // };

  // 2. 리팩토링 후
  const onClickPage = (page: number) => () => {
    refetch({ page });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}> {el.title}</span>
          <span style={{ margin: "10px" }}> {el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, idx) => (
        <span
          key={idx + 1}
          // id={String(idx + 1)}
          onClick={onClickPage(idx + 1)}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {idx + 1}
        </span>
      ))}
    </div>
  );
}
