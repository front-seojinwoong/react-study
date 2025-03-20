import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($mynumber: Int) {
    fetchBoard(number: $mynumber) {
      number
      writer
      title
      contents
      like
      createdAt
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard(
    $myWriter: String
    $myTitle: String
    $myContents: String
  ) {
    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
      _id
      number
      message
    }
  }
`;
export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $myNumber: Int
    $myWriter: String
    $myTitle: String
    $myContents: String
  ) {
    updateBoard(
      number: $myNumber
      writer: $myWriter
      title: $myTitle
      contents: $myContents
    ) {
      _id
      number
      message
    }
  }
`;
