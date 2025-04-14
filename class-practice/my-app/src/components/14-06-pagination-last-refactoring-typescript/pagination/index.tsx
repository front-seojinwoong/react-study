"use client";

import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { usePagination } from "./hook";
import { FetchBoardsQuery } from "@/commons/graphql/graphql";
import { IpaginationProps } from "./types";

export default function Pagination({ refetch, lastPage }: IpaginationProps) {
  const { startPage, onClickPage, onClickPrevPage, onClickNextPage } =
    usePagination({ refetch, lastPage });

  return (
    <div>
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
    </div>
  );
}
