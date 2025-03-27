"use client";

import CheckBox from "@/components/11-03-event-bubbling-stop-propagation-component";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
      like
      createdAt
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const qqq1 = () => {
    alert("1번 클릭");
  };

  const qqq4 = (event) => {
    event.stopPropagation();
    alert("4번 클릭");
  };
  const qqq5 = () => {
    alert("5번 클릭");
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number} id={el.writer} onClick={qqq1}>
          <CheckBox />
          <span style={{ margin: "10px" }}> {el.number}</span>
          <span style={{ margin: "10px" }} onClick={qqq4}>
            {" "}
            {el.title}
          </span>
          <span style={{ margin: "10px" }} onClick={qqq5}>
            {" "}
            {el.writer}
          </span>
        </div>
      ))}
    </div>
  );
}
