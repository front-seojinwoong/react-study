import * as PortOne from "@portone/browser-sdk/v2";
import { v4 as uuidV4 } from "uuid";

const Payment = () => {
  const onClickPayment = async () => {
    const result = await PortOne.requetPayment({
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
          country: "CONTRY_KR",
          addressLine1: "서울시",
          addressLine2: "3층",
        },
        zipcode: "11111",
      },
      redirectUrl: "http://localhost:3000/section27/27-01-payment-성공페이지",
    });

    console.log(result);
  };
  return <button onClick={onClickPayment}>결제하기</button>;
};
