"use client";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useAccessTokenStore } from "../stores/22-01-access-token-store";
import { getAccessToken } from "../libraries/26-01-get-access-token";
import { onError } from "@apollo/client/link/error";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}

export default function ApolloHeaderAndErrorSetting(props: IApolloSetting) {
  const { accessToken, setAccessToken } = useAccessTokenStore();

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 2. refreshToken으로 accesToken 재발급 받기
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              // 3. 재발급 받은 accessToken을 먼저 저장하고, 방금 실패한 쿼리의 정보 수정하고 재시도하기
              setAccessToken(newAccessToken);
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization: Bearer 만료된토큰
                  Authorization: `Bearer ${newAccessToken}`, // 3-2 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3 바꿔치기된 api재전송하기
        }
      }
    }
  });

  // const localStorageAccessToken = localStorage.getItem("accessToken");
  const uploadLink = createUploadLink({
    uri: "https://main-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    // cache: new InMemoryCache(), // => accessToken이 변경되서 리렌더될때 새로 만들어짐.
    cache: GLOBAL_STATE, // => 컴포넌트는 새로 만들어져도, globalState는 유지됨.
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
