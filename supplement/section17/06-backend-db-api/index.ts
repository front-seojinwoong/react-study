import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// 1. API_DOCS만들기
const typeDefs = `#graphql
  input CreateBoardInput {
    wrtier: String
    title: String
    contents: String
  }

  type MyBoard {
    id: Int
    wrtier: String
    title: String
    contents: String
  }
  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용(main-example 방식)
    # createBoard(createBoardInput: CreateBoardInput): String

    # 실무용(main-practice 방식)
    # createBoard(createBoardInput: CreateBoardInput!): String!
  }
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 1. 모두 꺼내기
      const result = await Board.find();
      return result;

      // 2. 한개만 꺼내기
      // const result = await Board.findOne({
      //   where: { number: 3 }
      //  });
      //  return result;
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,
        // writer: args.writer,
        // title: args.title,
        // contents: args.contents,
      });

      return "게시글 등록에 성공했어요!";
    },

    // updateBoard: async () => {
    //   Board.update({ id: 3 }, { writer: "영희" });
    // },

    // deleteBoard: async () => {
    //   Board.delete({ id: 3 }); // 3번 게시글 삭제해줘!
    //   Board.update({ id: 3 }, { isDeleted: true }); // 소프트 딜리트(3번 게시글 삭제했다 치자)
    //   Board.update({ id: 3 }, { deletedAt: new Date() }); // 소프트 딜리트 => 시간까지 기록 가능한 방법
    //   Board.softRemove() // 내장 소프트딜리트
    // },
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
