"use client";

import { useFormContext, FieldValues, Path } from "react-hook-form";
import ST from "./styles.module.css";
import { HTMLInputTypeAttribute, useState } from "react";

interface IInputBaseProps<프롭스의제네릭타입> {
  className?: string;
  type: HTMLInputTypeAttribute; // 리액트에서 정의한 input type들
  keyname: Path<프롭스의제네릭타입>;
}

// 1. 뼈대 만들기
function InputBase<나의제네릭타입 extends FieldValues>(
  props: IInputBaseProps<나의제네릭타입>
) {
  const { register } = useFormContext<나의제네릭타입>();

  return (
    <input
      type={props.type}
      {...register(props.keyname)}
      className={props.className}
    />
  );
}

// 2. 인풋 찍기
export function InputSoftFull<인풋의제네릭타입 extends FieldValues>(
  props: IInputBaseProps<인풋의제네릭타입>
) {
  return (
    <InputBase<인풋의제네릭타입>
      className={ST.input__soft__s__full}
      {...props}
    />
  );
}
