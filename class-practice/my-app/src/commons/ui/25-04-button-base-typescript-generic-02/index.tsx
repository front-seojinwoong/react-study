"use client";

import { useFormContext } from "react-hook-form";
import ST from "./styles.module.css";

//  1. 버튼뼈대 만들기
function ButtonBase(props) {
  const { formState } = useFormContext();
  return (
    <button disabled={!formState.isValid} className={props.className}>
      {props.children}
    </button>
  );
}

// 2. 버튼 찍어내기
// 2-1) 부드러운 버튼
export function ButtonSoftMFull(props) {
  return <ButtonBase className={ST.button__soft__m__full} {...props} />;
}

// 2-2) 얇은 버튼
export function ButtonThinFitM(props) {
  return <ButtonBase className={ST.button__soft__m__full} {...props} />;
}

// 2-3) 둥근버튼
export function ButtonCircleMM(props) {
  return <ButtonBase className={ST.button__soft__m__full} {...props} />;
}
