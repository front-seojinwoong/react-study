"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function StaticRoutingMovedPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event) => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    if (startPage + 10 < lastPage) {
      setStartPage(startPage + 10);
      refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}> {el.title}</span>
          <span style={{ margin: "10px" }}> {el.writer}</span>
        </div>
      ))}

      <span onClick={onClickPrevPage}>{`<`}이전페이지</span>
      {new Array(10).fill("철수").map(
        (_, idx) =>
          idx + startPage <= lastPage && (
            <span
              key={idx + startPage}
              id={String(idx + startPage)}
              onClick={onClickPage}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              {idx + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>{`>`}다음페이지</span>
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span
          key={el}
          id={String(el)}
          onClick={onClickPage}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {el}
        </span>
      ))} */}
      {/* {["c", "c", "c", "c", "c", "c", "c", "c", "c", "c"].map((_, idx) => (
        <span
          key={idx + 1}
          id={String(idx + 1)}
          onClick={onClickPage}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {idx + 1}
        </span>
      ))} */}
    </div>
  );
}
