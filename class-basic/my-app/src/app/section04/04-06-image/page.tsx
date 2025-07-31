"use client";

import Image from "next/image";
import ST from "./styles.module.css";

const ImagePage = () => {
  return (
    <>
      <Image
        src='/images/dog.webp'
        alt='강아지이미지'
        className={ST.imageCon}
        width={0}
        height={0}
        sizes='100vw'
      />
    </>
  );
};

export default ImagePage;
