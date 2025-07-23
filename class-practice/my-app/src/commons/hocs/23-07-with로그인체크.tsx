"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const with로그인체크 =
  (컴포넌트: () => JSX.Element) =>
  <P extends object>(프롭스: P) => {
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용가능합니다.");
        router.push("/section23/23-04-login-localstorage-check-hoc");
      }
    }, []);
    return <컴포넌트 {...프롭스} />;
  };

// { ...프롭스 } 의 뜻은... => 프롭스를 그대로 내려보내줘.

function QQQPage() {
  return <div>QQQPage</div>;
}

with로그인체크(QQQPage)({ bbb: "철수" });
