console.log("Hello React");
var a = 1, b = 2, d="string"; // var -> 동적으로 타입을 확인;
console.log(a,b,d);

console.log(typeof(d));
console.log("값은 %d 입니다", a);
//

// ES6
var json = {id : 'bitcamp'};
console.log('Hello my id is ' + json.id + ', nice to meet you!');
console.log(`Hello my id is ${json.id}, nice to meet you!`);