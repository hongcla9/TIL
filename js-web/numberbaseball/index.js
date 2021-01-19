const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");
let count = 0;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer = [];
//값을 바꿔 나갈것이기 때문에 let을 쓴다
{
  /*

let n = 0;
while (n <= 3) {
  const Index = Math.floor(Math.random() * (10 - n));
  answer.push(numbers[Index]);
  numbers.splice(Index, 1);
  n++;
}console.log(answer);*/
}
// 4개의 숫자를 중복없이 while 로 나타냄

for (let n = 0; n <= 3; n++) {
  const Index = Math.floor(Math.random() * (10 - n));
  answer.push(numbers[Index]);
  numbers.splice(Index, 1);
}
console.log(answer);

// while (n <= 3) {
//   answer[n] = Math.floor(Math.random() * 10);
//   n = n + 1;
// }
// console.log(answer);
//answer[0] + answer[1] +answer[2]+ answer[3]
//Number(answer.join("")); // 배열을 숫자로 다시 바꾸기 //조인을 하면 숫자
// 숫자가 나오지만 문자열로 바꿔야함
// 같은 함수가 나오기때문에 배열로 정의해줄수있다.
check.addEventListener("click", () => {
  const value = input.value;
  if (value && value.length === 4) {
    //엠퍼센트 : 앤드연산자 ,보호연산자
    if (answer.join("") === value) {
      logs.appendChild(document.createEvent);
    }
    //join 으로 바꿔서 answer 배열을 문자열로 바꿔줄수있다.
    // answer === value.split('') 은 배열과 배열을 비교하는건데,
    // 배열끼리 비교는 불가능하다 객체끼리 같을수없음.
    else {
      console.log("다르다");
      let strike = 0;
      let ball = 0;
      for (const [index, number] of answer.entries()) {
        for (const [index1, iString] of input.value.split("").entries()) {
          console.log(index, number, index1, iString);
          //entries는 문자열을 배열로 바꾼 후에 entries 가능
          if (number === Number(iString)) {
            if (index === index1) {
              strike++;
            } else {
              ball++;
            }
          }
        }
      }
      logs.appendChild(
        document.createTextNode(
          `${input.value}: ${strike}  strike  ${ball}  ball`
        )
      );
      if (count > 10) {
        logs.appendChild(
          document.createTextNode(`game over:${answer.join("")}`)
        );
        //변수와 문자열을 같이 쓸경우 백틱을 쓰면 편하다.
      } else {
        count++;
      }
    }
  }
});
// 4개의 숫자를 랜덤하게 가져오려면 Math.random() 을 가져온다
// Math.floor(Math.random()) => 내림이기때문에 정수만 도출
// '' , 0 , NaN , undefined, null  == > falsy value}
