import { FetchBoardQuery } from "@/commons/graphql/graphql";

export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: FetchBoardQuery;
}

export interface IMyVariables {
  myNumber: number;
  myWriter?: string;
  myTitle?: string;
  myContents?: string;
}
