"use client";

import { useFormContext } from "react-hook-form";
import ST from "./styles.module.css";

// 1. 뼈대 만들기
function InputBase(props) {
  const { register } = useFormContext();

  return (
    <input
      type={props.type}
      {...register(props.keyname)}
      className={props.className}
    />
  );
}

// 2. 인풋 찍기
export function InputSoftFull(props) {
  return <InputBase className={ST.input__soft__s__full} {...props} />;
}
