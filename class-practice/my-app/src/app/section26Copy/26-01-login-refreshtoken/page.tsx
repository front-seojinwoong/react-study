"use client";

import { useAccessTokenStore } from "@/commons/stores/22-01-access-token-store copy";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

function Loginpage() {
  const router = useRouter();
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);
  const { setAccessToken } = useAccessTokenStore();

  const onClickLogin = async () => {
    // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
    const result = await loginUserExample({
      variables: {
        email: "testUserEmail224",
        password: "12342222",
      },
    });

    const accessToken = result.data.loginUserExample.accessToken;

    if (!accessToken) {
      alert("로그인에 실패했습니다! 다시시도해주세요!");
      return;
    }

    setAccessToken(accessToken);

    router.push("/section26/26-01-login-refetchtoken-success");
  };

  return (
    <>
      이메일: <input type='text' />
      비밀번호: <input type='password' />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}

export default Loginpage;
