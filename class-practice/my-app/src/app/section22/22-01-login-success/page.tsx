"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_In = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_In);

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>
    </>
  );
}
