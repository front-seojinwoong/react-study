import { UpdateBoardInput } from "@/commons/graphql/graphql";
import { z } from "zod";

// 예시 1. 내가 만든 z.object로 타입 뽑아내기
type myschema = z.infer<typeof schema>;

// 예시 2-1. 이미 타입이 있는 경우, 이 타입을 적용하여 schema 만들기
interface IMySchema {
  writer: string;
  title: string;
  contents: string;
}

// 2-2. 이미 있는 타입을 다운로드 받은 경우 => Omit으로도 사용가능
// Omit을 사용할때는 주의!: 뺀 나머지 모두를 가져오는거기때문에 예측하지 못한 에러가 발생할 수 있다.
// 그러니 Pick을 사용하는 것이 실무할때 스트레스를 덜 받을 것이다.
export interface ISchema extends Pick<UpdateBoardInput, "title" | "contents"> {
  // hobby: string => 이런식으로 추가도 가능
}

export const schema: z.ZodType<ISchema> = z.object({
  // writer: z.string().min(1, { message: "작성자를 입력해주세요." }),
  title: z.string().min(1, { message: "제목을 입력해주세요." }),
  contents: z.string().min(1, { message: "내용을 입력해주세요." }),

  // 추가로 볼 사항들!
  // hobby: z.string().optional(),
  // emaii: z.string().email("이메일 형식에 적합하지 않습니다."),
  // password: z
  //   .string()
  //   .min(4, { message: "비밀번호는 최소 4자리 이상 입력해주세요." })
  //   .max(15, { message: "비밀번호는 최대 15자리로 입력해주세요." }),
  // phone: z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/, {
  //   message: "휴대폰 형식에 알맞지 않습니다.",
  // }),
});
