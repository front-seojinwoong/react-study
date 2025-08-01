"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoardsWithSearches($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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

  const onClickPage = (event) => {
    // 검색에서 refetch할때, search검색어가 refetch에서 저장되어
    refetch({ page: Number(event.currentTarget.id) });
  };

  const onChangeSearch = (event) => {
    // setSearch(event.currentTarget.value);
    refetch({ search: event.currentTarget.value, page: 1 });
  };

  return (
    <div>
      검색어222입력: <input type='text' onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}> {el.title}</span>
          <span style={{ margin: "10px" }}> {el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, idx) => (
        <span
          key={idx + 1}
          id={String(idx + 1)}
          onClick={onClickPage}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {idx + 1}
        </span>
      ))}
    </div>
  );
}
