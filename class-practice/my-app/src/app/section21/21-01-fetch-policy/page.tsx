"use client";

import FetchPolicyExample from "@/components/21-01-fetch-policy";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards1 {
    fetchBoards {
      _id
      writer
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickMove = () => {
    router.push("/section21/21-01-fetch-policy-moved");
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>
        1. 버튼을 클릭하면 새로운 컴포넌트가 나타납니다!sss
      </button>
      {isOpen && <FetchPolicyExample />}
      <br />
      ============================================================
      <br />
      <button onClick={onClickMove}>
        2. 버튼을 클릭하면 페이지가 이동됩니다!{" "}
      </button>
    </div>
  );
}
