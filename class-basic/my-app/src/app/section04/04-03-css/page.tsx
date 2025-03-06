"use client";

import styles from "./styles.module.css";

export default function CssPage() {
  return (
    <div>
      <button className={styles.buttonStyle}>버튼</button>
      <div className={styles.boxStyle}>네모상자</div>
    </div>
  );
}
