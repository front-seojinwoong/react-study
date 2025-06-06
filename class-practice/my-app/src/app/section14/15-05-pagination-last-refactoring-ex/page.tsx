"use client";

import List from "@/components/14-05-pagination-last-refactoring/list";
import Pagination from "@/components/14-05-pagination-last-refactoring/pagination";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./queries";

const StaticRoutingMovedPage = () => {
  useQuery(FETCH_BOARDS);

  return (
    <div>
      <List data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
};

export default StaticRoutingMovedPage;
