// html 부분
// <span class="typing-txt"> 안녕하세요 식사는 하셨나요? 🍚 </span>
//                <h2 class="typing"></h2>
//               <p class="op_main">
//                여러분들의 귀한 시간을 내어 제 포트폴리오에
//               방문해주셔서감사합니다
//            </p>

// var typingBool = false;
// var typingIdx = 0;

// // 타이핑될 텍스트를 가져온다
// var typingTxt = $(".typing-txt").text();
// typingTxt = typingTxt.split(""); // 한글자씩 자른다.

// if (typingBool == false) {
//   // 타이핑이 진행되지 않았다면
//   typingBool = true;
//   var tyInt = setInterval(typing, 100); // 반복동작
// }

// function typing() {
//   if (typingIdx < typingTxt.length) {
//     // 타이핑될 텍스트 길이만큼 반복
//     $(".typing").append(typingTxt[typingIdx]);
//     // 한글자씩 이어준다.
//     typingIdx++;
//   } else {
//     //끝나면 반복종료
//     clearInterval(tyInt);
//   }
// }

// setTimeout(function () {
//   op_main.css("opacity", "1");
// }, 2500);
let op_main = $(".op_main");

const homeText = document.querySelector(".home__title");

const content =
  "안녕하세요 식사는 하셨나요? 여러분들의 귀한 시간을 내어\n제 포트폴리오에 방문해주셔서 감사합니다 🙏🏻";
let count = 0;

var test = setInterval(typing1, 100);

function typing1() {
  if (content[count] === " ") {
    homeText.innerHTML += "&nbsp;";
  } else {
    homeText.innerText += content[count];
  }
  count++;
  if (count == content.length) {
    // homeText.innerText = "";
    // count = 0;
    // count++;
    clearInterval(test);
    op_main.css("opacity", "1");
  }
  // else {
  // clearInterval(test);
  // }
}
// var test = setInterval(typing1, 100);
