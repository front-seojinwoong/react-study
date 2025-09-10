"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

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
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Link
          key={el._id}
          href={`/section30/30-03-web-editor-hook-form-xss/${el._id}`}
        >
          <div>
            <span style={{ margin: "10px" }}> {el.title}</span>
            <span style={{ margin: "10px" }}> {el.writer}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
