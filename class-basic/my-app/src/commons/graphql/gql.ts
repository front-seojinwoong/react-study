/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation createBoard(\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n      _id\n      number\n      message\n    }\n  }\n": typeof types.CreateBoardDocument,
    "\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n": typeof types.CreateProductDocument,
    "\n  query fetchBoard($mynumber: Int) {\n    fetchBoard(number: $mynumber) {\n      number\n      writer\n      title\n      contents\n      like\n      createdAt\n    }\n  }\n": typeof types.FetchBoardDocument,
    "\n  mutation deleteBoard($number: Int) {\n    deleteBoard(number: $number) {\n      message\n    }\n  }\n": typeof types.DeleteBoardDocument,
    "\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n      like\n      createdAt\n    }\n  }\n": typeof types.FetchBoardsDocument,
    "\n  mutation updateBoard(\n    $myNumber: Int\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    updateBoard(\n      number: $myNumber\n      writer: $myWriter\n      title: $myTitle\n      contents: $myContents\n    ) {\n      _id\n      number\n      message\n    }\n  }\n": typeof types.UpdateBoardDocument,
};
const documents: Documents = {
    "\n  mutation createBoard(\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n      _id\n      number\n      message\n    }\n  }\n": types.CreateBoardDocument,
    "\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n": types.CreateProductDocument,
    "\n  query fetchBoard($mynumber: Int) {\n    fetchBoard(number: $mynumber) {\n      number\n      writer\n      title\n      contents\n      like\n      createdAt\n    }\n  }\n": types.FetchBoardDocument,
    "\n  mutation deleteBoard($number: Int) {\n    deleteBoard(number: $number) {\n      message\n    }\n  }\n": types.DeleteBoardDocument,
    "\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n      like\n      createdAt\n    }\n  }\n": types.FetchBoardsDocument,
    "\n  mutation updateBoard(\n    $myNumber: Int\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    updateBoard(\n      number: $myNumber\n      writer: $myWriter\n      title: $myTitle\n      contents: $myContents\n    ) {\n      _id\n      number\n      message\n    }\n  }\n": types.UpdateBoardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createBoard(\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n      _id\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation createBoard(\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n      _id\n      number\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard($mynumber: Int) {\n    fetchBoard(number: $mynumber) {\n      number\n      writer\n      title\n      contents\n      like\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard($mynumber: Int) {\n    fetchBoard(number: $mynumber) {\n      number\n      writer\n      title\n      contents\n      like\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteBoard($number: Int) {\n    deleteBoard(number: $number) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation deleteBoard($number: Int) {\n    deleteBoard(number: $number) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n      like\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n      like\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBoard(\n    $myNumber: Int\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    updateBoard(\n      number: $myNumber\n      writer: $myWriter\n      title: $myTitle\n      contents: $myContents\n    ) {\n      _id\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation updateBoard(\n    $myNumber: Int\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    updateBoard(\n      number: $myNumber\n      writer: $myWriter\n      title: $myTitle\n      contents: $myContents\n    ) {\n      _id\n      number\n      message\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;