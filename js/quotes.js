const quotes = [
  {
    quotes: "깨지고 부서져라.",
    author: "우왁굳",
  },
  {
    quotes: "우선 겸손을 배우려 하지 않는 자는 아무것도 배우지 못한다.",
    author: "O.매러디드",
  },
  {
    quotes: "세상은 고통으로 가득하지만 한편 그것을 이겨내는 일로도 가득차 있다.",
    author: "헬렌 켈러",
  },
  {
    quotes: "삶은 지속적인 발견이다.",
    author: "에르네스트 헤밍웨이",
  },
  {
    quotes: "성공의 비결은 자신을 잃지 않는 것이다.",
    author: "마릴린 먼로",
  },
  {
    quotes: "성공은 준비와 기회가 만났을때 일어난다.",
    author: "존 F. 케네디",
  },
  {
    quotes: "문제를 해결하기 위해 타인을 비난하지 말고, 자신의 부족함을 인식하라.",
    author: "존 우든",
  },
  {
    quotes: "어떤 일을 하는데 즐거움을 느끼면 그 일은 일이 아니라 즐거움이다.",
    author: "마크 트웨인",
  },
  {
    quotes: "인생에서 가장 큰 위험은 위험을 감수하지 않는 것이다.",
    author: "시어도어 루즈벨트",
  },
  {
    quotes: "우리의 생각이 우리의 삶을 결정한다.",
    author: "마커스 아우렐리우스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const toDayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = toDayQuote.quotes;
author.innerHTML = toDayQuote.author;
