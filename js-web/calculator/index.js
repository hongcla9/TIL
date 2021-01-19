const numberInput = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const calculateButton = document.querySelector("#calculate");
const resultInput = document.querySelector("#result");

let temp;
//const 로 쓰면 temp 를 바꿀수 없기때문에 let
let operator;

plusButton.addEventListener("click", () => {
  if (numberInput.value) {
    // value 값은 문자열로 출력 되기 때문에 형변환을 해줘야한다
    temp = Number(numberInput.value);
    operator = "+";
    numberInput.value = null;
  }
  //무시할거면 else 굳이 안써도됨
});
clearButton.addEventListener("click", () => {
  // 입력값을 초기화 하기위해서
  numberInput.value = "";
  // operator 와 temp가 들어있는데 입력값을 초기화 시켜주기 위해서는 null 을 쓴다.
  temp = null;
  operator = null;
  //무시할거면 else 굳이 안써도됨
});
calculateButton.addEventListener("click", () => {
  if (operator) {
    if (numberInput.value) {
      if (operator === "+") {
        resultInput.value = temp + Number(numberInput.value);
      } else if (operator === "-") {
        resultInput.value = temp - Number(numberInput.value);
      } else if (operator === "/") {
        resultInput.value = temp / Number(numberInput.value);
      } else if (operator === "*") {
        resultInput.value = temp * Number(numberInput.value);
      } else {
        if (numberInput.value) {
          resultInput.value;
        }
      }
    }
  }
});
