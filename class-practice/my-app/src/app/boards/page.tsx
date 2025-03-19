"use client";

import { formatDate, whatIs } from "@/commons/utils";
import { gql, useMutation, useQuery } from "@apollo/client";
import Link from "next/link";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const BoardsPage = () => {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (boardId: string) => {
    deleteBoard({
      variables: { boardId },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <div className='centerPosition'>
      <table className='onTable'>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.fetchBoards.map((el, index) => (
            <tr key={el._id}>
              <td>{index + 1}</td>
              <td>
                <Link href={`/board/${el._id}`}>{el.title}</Link>
              </td>
              <td>{el.writer}</td>
              <td>{formatDate(el.createdAt)}</td>
              <td>
                <button onClick={() => onClickDelete(el._id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardsPage;
