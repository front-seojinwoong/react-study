"use client";

import { with로그인체크 } from "@/commons/hocs/23-07-with로그인체크";
import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_In = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
function LoginSuccessPage() {
  // 1. 페이지 접속하면 자동으로 data에 받아지고(= data는 글로벌스테이트에 저장), 리렌더링 됨.
  // const { data } = useQuery(FETCH_USER_LOGGED_In);

  // 2. 나의함수 실행시 data에 받아지고 (data는 글로벌스테이트에 저장), 리렌더링 됨.
  // const [나의함수, { data }] = useLazyQuery(FETCH_USER_LOGGED_In);

  // 3. fetch처럼 사용하는 방법(결과는 글로벌스테이트에 저장됩니다.)
  // const client = useApolloClient();
  // client.query({
  //   query: FETCH_USER_LOGGED_In,
  // });
  const client = useApolloClient();

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_In,
    });
    console.log("result", result);
  };

  return (
    <>
      <button onClick={onClickButton}>클릭하세요</button>
      {/* <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div> */}
    </>
  );
}

export default LoginSuccessPage;
