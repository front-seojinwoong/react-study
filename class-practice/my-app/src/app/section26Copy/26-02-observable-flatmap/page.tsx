"use client";

import { from } from "zen-observable";

function ObservableFlatmap() {
  const onClickButton = () => {
    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"])
      .flatMap((el) => from([`${el} 결과에 qqq적용`, `${el}결과에 zzz적용`]))
      .subscribe((el) => {
        console.log(el);
      });
  };
  return <button onClick={onClickButton}>클릭</button>;
}

export default ObservableFlatmap;
