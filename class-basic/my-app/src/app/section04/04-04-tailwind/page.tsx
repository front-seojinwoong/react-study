"use client";

import styles from "./styles.module.css";

export default function CssPage() {
  return (
    <div>
      <button className={styles.buttonStyle}>버튼</button>
      <div className={styles.boxStyle1}>네모상자</div>
      <br />

      <div className={styles.boxStyle2}>네모상자</div>

      <div className='lg:chulsooBox'>클때는 초록색</div>
    </div>
  );
}
