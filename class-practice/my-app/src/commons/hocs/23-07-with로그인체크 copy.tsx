"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const withLoginCheck =
  (Component: () => JSX.Element) =>
  <P extends object>(props: P) => {
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 이후 이용 가능합니다.");
        router.push("/section23/23-04-login-localstorage-check-hoc");
      }
    }, []);
    return <Component {...props} />;
  };

function QQQPage() {
  return <div>QQQPage</div>;
}
