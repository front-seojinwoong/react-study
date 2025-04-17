"use client";

import { useEffect, useState } from "react";

const RestGetPage = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImg = async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json();
      setImageUrl(data.message);
    };
    fetchImg();
  }, []);

  return <img src={imageUrl} alt='' />;
};

export default RestGetPage;
