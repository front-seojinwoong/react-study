"use client";

import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import _ from "lodash";

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
  // const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    // 검색에서 refetch할때, search검색어가 refetch에서 저장되어
    refetch({ page: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event) => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <div>
      검색어입력: <input type='text' onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>
            {" "}
            {el.title
              .replaceAll(keyword, `@#$${keyword}@#$`)
              .split("@#$")
              .map((el, idx) => (
                <span
                  key={`${el}_${idx}`}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </span>
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
