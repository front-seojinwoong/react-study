"use client";

import { useEffect } from "react";

declare const window: Window & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const scriptTag = document.createElement("script"); // <script></script>
    scriptTag.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=dd81e3857620506033ee317f7606dce9&autoload=false";
    document.head.appendChild(scriptTag);

    scriptTag.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <>
      <div id='map' style={{ width: 500, height: 400 }}></div>
    </>
  );
}
