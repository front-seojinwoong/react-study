"use client";

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import CommentItem from "@/components/15-05-comment-edit3-typescript";
import { useQuery } from "@apollo/client";

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FetchBoardsDocument);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <CommentItem el={el} key={el._id} />
      ))}
    </div>
  );
}
