"use client";

import { useRouter } from "next/navigation";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickSubmit1 = () => {
    router.push("/section07/07-02-dynamic-routing-board-moved/1");
  };
  const onClickSubmit2 = () => {
    router.push("/section07/07-02-dynamic-routing-board-moved/2");
  };
  const onClickSubmit100 = () => {
    router.push("/section07/07-02-dynamic-routing-board-moved/100");
  };
  return (
    <div>
      <button onClick={onClickSubmit1}>1번 게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit2}>2번 게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit100}>100번 게시글 등록하기</button>
    </div>
  );
}
