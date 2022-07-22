/**
 * 단축 평가 :
 * 논리연산에서 굳이 불필요한 연산을 생략하는 방법
 */

console.log(false && true); // AND 연산에서 false 가 먼저 오면 뒤의 값은 계산 X
console.log(true || false); // OR 연산에서 true가 먼저 오면 뒤의 값은 계산 X