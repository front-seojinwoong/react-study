"use client";

import { with로그인체크 } from "@/commons/hocs/23-04-with로그인체크";
import { gql, useApolloClient } from "@apollo/client";

const FETCH_USER_LOGGED_In = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

const LoginSuccessPage = () => {
  const client = useApolloClient();

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_In,
    });
    console.log("result!", result);
  };

  return (
    <>
      <button onClick={onClickButton}>클릭해보세요</button>
    </>
  );
};

export default LoginSuccessPage;
