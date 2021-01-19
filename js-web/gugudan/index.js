document.querySelector("#click").addEventListener("click", () => {
  const a = document.querySelector("#first").value;
  //쿼리셀렉터 함수를 이용해 id=first를 갖고오고싶다. 가져오려면 .value
  //.는 ~의 소유에 있는이라는 뜻 () 는 동작 실행. 쌍따옴표는 문자열을 의미
  //코딩은 순서대로 실행된다.
  const b = document.querySelector("#second").value;

  //로 저장 가능
  if (a) {
    //a 의 값이 있을경우
    const r = document.querySelector("#result");
    if (b) {
      a * b;
      r.textContent = a * b;
      //input 은 value 로 가져오고 span 은 textcontent로 가져온다
    } else {
      r.textContent = "두번째값을 입력하세요";
    }
  } else {
    r.textContent = "첫번째 값을 입력하세요";
  }
});

//const a 라는 변수를 만들어서 first입력창에있는 값을 가져오고 저장,
//(click) 을 했을떼 => { } 중괄호의 동작을 하게해라
