import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// 1. API_DOCS만들기
const typeDefs = `#graphql
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type MyBoard {
    number: Int
    wrtier: String
    title: String
    contents: String
  }
  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    createBoard(createBoardInput: CreateBoardInput): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.38.113",
  port: 5031,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB 접속에 성공했습니다");

    startStandaloneServer(server).then(() => {
      console.log("그래프큐엘 서버가 실행되었습니다.");
    });
  })
  .catch((error) => {
    console.log("DB 접속에 실패했습니다");
    console.log("원인: ", error);
  });
