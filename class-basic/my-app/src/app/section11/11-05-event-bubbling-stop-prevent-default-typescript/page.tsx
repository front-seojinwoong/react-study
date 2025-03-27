"use client";

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import CheckBox from "@/components/11-03-event-bubbling-stop-propagation-component";
import { useQuery } from "@apollo/client";
import { MouseEvent } from "react";

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FetchBoardsDocument);

  const onClickLike = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    alert("좋아요가 +1 올랐습니다");
  };

  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <a key={el.number} href='https://naver.com'>
          <div id={el.writer ?? ""}>
            <CheckBox />
            <span style={{ margin: "10px" }}> {el.number}</span>
            <span style={{ margin: "10px" }}> {el.title}</span>
            <span style={{ margin: "10px" }}> {el.writer}</span>
            <span onClick={onClickLike}>좋아요</span>
          </div>
        </a>
      ))}
    </div>
  );
}
