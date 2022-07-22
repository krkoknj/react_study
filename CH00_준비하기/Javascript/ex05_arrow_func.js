/**
 * 화살표 함수
 */

// map()과 ()=>{}
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Berylium'
];
materials.map((e,idx)=>{
    console.log(e,idx);  // 실행결과 : Hydrogen 0 Helium 1 Lithium 2 Berylium 3
});

let newArr = materials.map((e,idx)=>{
    return e.length * 2; 
});

console.log(newArr); // 실행결과 : [ 16, 12, 14, 16 ]

//회문
let palindromes = [
    '스위스',
    '팥콩밭',
    '별똥별',
    '음악',
    '인도인'
];

const contents = palindromes.filter((str)=>{
    if(str===str.split('').reverse('').join('')){
        return str;
    }
});
console.log(contents); // 실행결과 : [ '스위스', '별똥별', '인도인' ]
