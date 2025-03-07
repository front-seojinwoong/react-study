"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export default function ImagePage() {
  return (
    <>
      {/* 이미지_고전 방식 */}
      <img
        src='/images/dog.webp'
        alt='강아지이미지'
        className={styles.이미지를보여주자}
      />

      {/* 이미지_Next 방식 */}
      <Image
        src='/images/dog.webp'
        alt='강아지이미지'
        className={styles.이미지를보여주자}
        width={0}
        height={0}
        sizes='100vw'
      />
    </>
  );
}
