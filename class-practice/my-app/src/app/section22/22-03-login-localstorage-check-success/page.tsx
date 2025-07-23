"use client";

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_In);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용가능합니다.");
      router.push("/section22/22-03-login-localstorage-check");
    }
  }, []);

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>
    </>
  );
}
