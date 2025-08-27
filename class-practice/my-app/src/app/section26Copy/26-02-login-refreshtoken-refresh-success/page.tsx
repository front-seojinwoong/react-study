"use client";

import { with로그인체크 } from "@/commons/hocs/26-02-with로그인체크copy";
import { gql, useApolloClient, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  // 1. 페이지 접속하면 자동으로 data 받아지고 (data는 글로벌스테이트에 저장), 리렌더링됨.
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const client = useApolloClient();

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log("result", result);
  };

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>;
}

export default with로그인체크(LoginSuccessPage);
