"use client";

import { useAccessTokenStore } from "@/commons/stores/22-01-access-token-store";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

function LoginPage() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useAccessTokenStore();

  const onClickLogin = async () => {
    // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
    const result = await loginUser({
      variables: {
        email: "testUserEmail1224",
        password: "12342222",
      },
    });

    const accessToken = result.data.loginUser.accessToken;

    // 2. 받아온 accessToken 을 global state에 저장하기
    if (!accessToken) {
      alert("로그인에 실패했습니다 다시시도햇주세요!");
      return;
    }

    setAccessToken(accessToken);
  };

  return <div>LoginPage</div>;
}

export default LoginPage;
