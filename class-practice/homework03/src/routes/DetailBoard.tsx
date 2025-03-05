import React from "react";
import icoUser from "../assets/images/common/ico_user.svg";
import icoShare from "../assets/images/common/ico_share.svg";
import icoLocation from "../assets/images/common/ico_location.svg";

import "../assets/styles/onStyle.css";

const DetailBoard = () => {
  return (
    <div className="onLayout subPage">
      <div className="onContainer">
        <h2 className="onT1">
          살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고
          쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라
        </h2>
        <div className="onFlexBox hasLine stretch">
          <div className="userThumb">
            <img src={icoUser} alt="유저썸네일" />
            <span className="text_gray_5f">홍길동</span>
          </div>
          <p className="datetime text_gray_81">2024.11.11</p>
        </div>
        <div className="boardDetailBox">
          <div className="ta-r">
            <button className="utilIcon">
              <img src={icoShare} alt="공유하기" />
            </button>
            <button className="utilIcon">
              <img src={icoLocation} alt="위치확인하기" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBoard;
