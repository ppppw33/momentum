const clock = document.querySelector("#clock"); //id가 clock 인 html 태그 선택
function getClocks() {
  const date = new Date(); // 날짜 객체 생성
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}`;
}
getClocks();
setInterval(getClocks, 1000); //매 1초(1000ms)마다 getClocks함수를 호출
