"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { v4 as uuidV4 } from "uuid";

const PaymentPage = () => {
  const onClickPayment = async () => {
    const result = await PortOne.requestPayment({
      storeId: "store-ce0e94b8-5728-4c4d-b4c6-81a68e9abfa1",
      channelKey: "channel-key-16e2e841-f7b9-40c7-84a1-ac7457f949a7",
      paymentId: uuidV4(),
      orderName: "마우스",
      totalAmount: 3000,
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",
      customer: {
        fullName: "철수",
        phoneNumber: "010-1234-5678",
        email: "a@a.com",
        address: {
          country: "COUNTRY_KR",
          addressLine1: "서울시",
          addressLine2: "3층",
        },
        zipcode: "11111",
      },
      redirectUrl: "http://localhost:3000/section27/27-01-payment-성공페이지",
    });

    // 결제 성공시 로직
    console.log(result);

    // 백엔드에다 결제관련 데이터 넘겨주기(뮤테이션 실행하기) => 숙제API에서 사용 (주의! storeId, channelKey 변경 필요)
    // createPointTransactionOfLoading(paymentId: ...)
  };

  return <button onClick={onClickPayment}>결제하기</button>;
};

export default PaymentPage;
