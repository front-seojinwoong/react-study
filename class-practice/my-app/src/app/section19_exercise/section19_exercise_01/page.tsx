"use client";

import { useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import _ from "lodash";
import { FetchBoardsWithSearchesDocument } from "@/commons/graphql/graphql";

const Section19Exercise01 = () => {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FetchBoardsWithSearchesDocument);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <div>
      검색어입력: <input type='text' onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>
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
};

export default Section19Exercise01;
