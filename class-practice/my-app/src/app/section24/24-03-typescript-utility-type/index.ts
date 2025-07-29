interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//  1) 유틸리티 타입들
//  1. Partial 타입
type aaa = Partial<IProfile>;

// 2. Required 타입
type bbb = Required<IProfile>;

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
type ddd = Omit<IProfile, "school">;

type eee = "철수" | "영희" | "훈이"; // 5. Union 타입
const child1: eee = "짱구"; // 철수, 영희, 훈이만 됨
const child2: eee = "철수"; // 철수, 영희, 훈이만 됨
const child3: string = "사과"; // 사과, 바나나, 영희, 훈이 등.. 다됨

console.log("child1", child1);
console.log("child2", child2);
console.log("child3", child3);

// 6. Record타입 <= 5. Union타입을 활용하여...
type fff = Record<eee, number>;
type fff2 = Record<eee, IProfile>;

// 7. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
const myprofile: ggg = "name";
console.log(myprofile);

// 2) type 과 interface 차이: interface는 선언병합 가능 => 그래서 interface는 쓰는 경우가 좀더 많다
interface IProfile {
  candy: number;
}

const qqq: IProfile = {
  name: "철수",
  candy: 3,
  // ...
};

// 3) 배운것 응용
const profile: Partial<IProfile> = {
  candy: 10,
};

console.log(profile);
