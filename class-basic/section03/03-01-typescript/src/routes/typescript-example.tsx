const TypeScriptExample = () => {

  // 타입추론
  let aaa = '안녕하세요';
  aaa = 3;

  // 타입명시
  let bbb:string = '반갑습니다';
  bbb = 10;

  // 타입명시가 필요한 상황
  let ccc: number | string = 0;
  ccc = '1000원';
}