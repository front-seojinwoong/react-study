"use client";

import Image from "next/image";
import styles from './styles.module.css';

const ImagePage = () => {
  return (
    <>
      <img src="/images/dog.webp" alt="강아지이미지" className={styles.이미지를보여주자}/>
      <Image src="/images/dog.webp" alt="강아지이미지" className={styles.이미지를보여주자} width={0} height={0} sizes="100vw"/>
    </>
  )
};

export default ImagePage;
