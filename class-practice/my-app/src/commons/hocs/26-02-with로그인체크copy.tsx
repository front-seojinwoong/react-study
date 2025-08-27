"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccessTokenStore } from "../stores/22-01-access-token-store";
import { useLoadStore } from "../stores/26-02-loading-store";

export const with로그인체크 =
  (컴포넌트: () => JSX.Element) =>
  <P extends object>(프롭스: P) => {
    const router = useRouter();
    const { isLoaded } = useLoadStore();
    const { accessToken } = useAccessTokenStore();

    useEffect(() => {
      if (!isLoaded) return;
      if (accessToken) return;

      alert("로그인 후 이용가능합니다.");
      router.push("/section26/26-02-login-refreshtoken-refresh");
    }, [isLoaded]);

    return <컴포넌트 {...프롭스} />;
  };
