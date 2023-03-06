


//object shorthand Assignment
//ES6 에서는 객체를 반환할때 불필요한 반복을 하지 않아도 된다
let name = 'yejinn';
let age = 10;

let person = {
  name : name,
  age : age
}

console.log(person)

let person2 ={
  name,
  age
}
//단축 표기법
//키와 키값에 들어가는 변수의 이름이 같다면 생략하고 한번만 작성해도 된다.
//키와 벨류값이 일치 할때만 줄여서 사용가능
//키 이름으로 선언된 값이 있다면  value가 생략되어도 값을 매칭 해준다.
console.log(person2)