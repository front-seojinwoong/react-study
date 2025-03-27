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

  const onClickLike = (event) => {
    event.stopPropagation();
    alert("좋아요가 +1 올랐습니다");
  };
  const testfn = () => {
    alert(111);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <a key={el.number} href='https://naver.com' onClick={testfn}>
          <div id={el.writer}>
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
