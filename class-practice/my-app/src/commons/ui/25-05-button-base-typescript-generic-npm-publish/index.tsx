"use client";

import { FieldValues, useFormContext } from "react-hook-form";
import ST from "./styles.module.css";

interface IButtonBaseProps {
  children: React.ReactNode;
  className?: string;
}

//  1. 버튼뼈대 만들기
function ButtonBase<버튼의제네릭타입 extends FieldValues>(
  props: IButtonBaseProps
) {
  const { formState } = useFormContext<버튼의제네릭타입>();
  return (
    <button disabled={!formState.isValid} className={props.className}>
      {props.children}
    </button>
  );
}

// 2. 버튼 찍어내기
// 2-1) 부드러운 버튼
export function ButtonSoftMFull<버튼의제네릭타입 extends FieldValues>(
  props: IButtonBaseProps
) {
  return (
    <ButtonBase<버튼의제네릭타입>
      className={ST.button__soft__m__full}
      {...props}
    />
  );
}

// 2-2) 얇은 버튼
export function ButtonThinFitM(props) {
  return <ButtonBase className={ST.button__soft__m__full} {...props} />;
}

// 2-3) 둥근버튼
export function ButtonCircleMM(props) {
  return <ButtonBase className={ST.button__soft__m__full} {...props} />;
}
