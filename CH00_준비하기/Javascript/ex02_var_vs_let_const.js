/* [const]
  constant(상수)를 뜻
    '항상 같은 수'
  변수(變數)인데 상수(常數)
  변치 않는 값을 갖는 변수
  - const로 선언한 변수는 값의 재할당 불가(X)
  - 반드시 선언과 동시에 값이 할당되어야 한다
 */  

const PI = 3.141592;
console.log(`반지름이 10인 원의 넓이는 ${10**2*PI} 입니다.`);


// PI = 3.141;  // 재할당 불가
// console.log(`반지름이 10인 원의 넓이는 ${10**2*PI} 입니다.`); // 에러

var sn;
sn = 'K2022-13';
console.log(`SN:`,sn);

const SN = 'K2022-13';
// SN = 'K2022-13';


/* [let]
 * 변수(變數)
 * 다른 값이 재할당 가능(O)
 */


let score;
score = 100;
score = 200;


/**
 *  var vs let
 */

var some = 104;

some = 1004;

var some = 104;
console.log(some);




/**
 * 호이스팅(Hoisting)
 */
console.log('odd=', odd);
var odd = 1;

hello();
function hello(){console.log("Hello")};

// ---------------let---------------//
// console.log(level);
// let level = 10; // 에러
