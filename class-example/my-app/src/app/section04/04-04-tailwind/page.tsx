"use client";

import ST from './styles.module.css';

const CssPage = () => {
  return (
    <div>
      <div className={ST.buttonStyle}>버튼</div>
      <div className={ST.boxStyle}></div>
      <br />
      
      <div className={ST.boxStyle2}>네모상자</div>
      <div className="lg:chilsooBox">클때는 초록색</div>
    </div>
  )
};

export default CssPage;
