"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards2 {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function FetchPolicyExample() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}> {el.title}</span>
          <span style={{ margin: "10px" }}> {el.writer}</span>
        </div>
      ))}
    </div>
  );
}
