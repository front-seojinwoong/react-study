// 1. 문자/숫자/불린 타입 => primitive 타입

import { useState } from "react";

const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true);

//
//
//

// 2. any 타입 => 그냥 자바스크립트랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result2 = getAny("철수", 123, true);

//
//
//

// 3. unknown 타입 => any보다는 조금더 안전한 타입
// 정 any를 쓰려면 unknown을 써라 그래야 좀 더 안정성이 높다.
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result3 = getUnknown("철수", 123, true);

//
//
// 4. generic 타입
const getGeneric = <나의타입1, 나의타입2, 나의타입3>(arg1: 나의타입1, arg2: 나의타입2, arg3: 나의타입3): [나의타입3, 나의타입2, 나의타입1] => {
  return [arg3, arg2, arg1];
};

const result4 = getGeneric("철수", 123, true);

//
//
// 5. generic 타입 => 짧게써보기
const getGeneric2 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};

const result5 = getGeneric2("철수", 123, true);

//
//
// 6. generic 타입 => 더 짧게!
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result55 = getGeneric3("철수", 123, true);

//
//
// 7. generic 타입 => 함수 선언식에서는 어떻게?
function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result66 = getGeneric4<string, number, boolean>("철수", 123, true);

const [aaa, setAAAA] = useState<string>;
