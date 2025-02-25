export const apple = 3;
export const grape = 2;

const strawberry = 5;
export default strawberry;

/**
 * 주의할 점
 * export는 변수 초기화와 동기에 쓸수있지만 (export const apple = 3; 해도 오류가 안남. 가능하다.) 
 * export default는 변수 초기화와 동시에 내보낼 수 없다
 * (export default const strawberry = 5; 불가능)
 * (
 *  const strawberry = 5;
 *  export default strawberry; 이렇게 나눠서 해야함.
 * )
 */