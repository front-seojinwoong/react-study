const TypeScriptExample = () => {

  // 타입추론
  let aaa = '안녕하세요';
  aaa = 3;

  // 타입명시
  let bbb:string = '반갑습니다';
  bbb = 10;

  // 타입명시가 필요한 상황
  let ccc:number | string = 1000;
  ccc = '111원';

  // 숫자타입
  let ddd: number = 10;
  ddd = '철수';

  // 불린 타입
  let eee: boolean = true;
  eee = false; 
  
  // 배열타입
  let fff:number[] = [1,2,3,4,5, '안녕하세요'];
  let ggg:string[] = ['철수', '영희', '순희', 234, 32444];
  let hhh:(string | number)[] = [1,2,3,4,5, '안녕하세요']; // 타입을 추론해서 어떤 타입인지 역으로 알아내기!

  // 객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string; // 객체?: 이것은 없어도 되고 있어도된다.
  }
  const profile: IProfile = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교'
  }

  profile.hobby = '수영' 


  // 함수타입 => 함수는 타입추론이 되지 않는다 왜냐? 함수는 어디서 몇번이든 호출 가능하므로, 타입추론 안됨!(타입 명시하기)
  // 그래서 함수는 매개변수의 타입을 꼭! 명시적으로 작성해주어야한다.
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit
  }

  const result = add(1000, 2000, '원'); // 결과의 리턴 타입도 알 수 있다.

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit
  }

  const result2 = add2(1000, 2000, '원'); // 결과의 리턴 타입도 알 수 있다.


  // any타입
  let qqq:any = '철수'; // 자바스크립트와 동일! 가급적 쓰지 않는것이 좋다.
  qqq = 123;
  qqq = true;

}