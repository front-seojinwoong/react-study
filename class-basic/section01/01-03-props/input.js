const 테스트인풋 = ({appleCount, strawberyCount, 나는누구게}) => {

  console.log('appleCount', appleCount);
  console.log('나는누구게', 나는누구게);

  const 나만의초기메세지 = '비밀번호를 입력하세요';


  // 어차피 바벨이 변수까지 다 합쳐서 진짜HTML로 바꿔줌
  return <input type='text' placeholder={나만의초기메세지}/>
}