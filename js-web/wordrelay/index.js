const btn = document.querySelector("#button");
//객체를 저장한 변수
btn.addEventListener("click", () => {
  //클릭했을때 실행되는 함수
  //인풋만 value 나머지는 textContent
  const word = document.querySelector("#word").textContent;
  //const 는 다른 값으로 바꿀 수 없다.
  //let은 가능. var 도 가능
  const input = document.querySelector("#input").value;
  const lastIndex = word.length - 1;
  const w = word[lastIndex];
  //word 의 마지막 문자열 - 1
  const i = input[0];
  const dic = [];
  //단어장을 이용해서 만약 중복되는 단어를 썼을경우 에러 처리하기
  if (dic.includes(input)) {
    document.querySelector("#error").textContent = "중복입니다.";
  } else {
    if (w === i) {
      const hello = "too"; // 괄호 안에 변수 선언하면 괄호 까지 변수가 유효함
      //사용하는거 가까이에다가 변수선언을 한다. 지역변수임 .
      //전역변수로 쓰려면 괄호 밖에다가 선언
      document.querySelector("#word").textContent = input;
      document.querySelector("#error").textContent = " ";
      document.querySelector("#input").value = " ";
      dic.push(input);
    } else {
      const hello = "too";
      document.querySelector("#error").textContent = "땡 ";
    }
  }

  //첫글자는 0 컴퓨터의 배열은 0부터 시작
  //string 문자열 number 숫자 boolean t/f object 객체 null undefined
  //'a' 자바스크립트는 이것도 문자열임
  //``이것도 문자열 >  'i'am studying' 할때 따옴표를 다르게 해주면 ' 을 나타낼수있다.
  // = 대입 === 같다는 말
});
