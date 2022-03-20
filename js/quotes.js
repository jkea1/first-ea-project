const quotes = [
  {
    quote: "q1",
    author: "a1",
  },
  {
    quote: "q2",
    author: "a2",
  },
  {
    quote: "q3",
    author: "a3",
  },
  {
    quote: "q4",
    author: "a4",
  }, 
  {
    quote: "q5",
    author: "a5",
  },
  {
    quote: "q6",
    author: "a6",
  },
  {
    quote: "q7",
    author: "a7",
  },
  {
    quote: "q8",
    author: "a8",
  },
  {
    quote: "q9",
    author: "a9",
  },
  {
    quote: "q10",
    author: "a10",
  }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote; // quotes에서 랜덤하게 가져온 todaysQuote에서 array 안의 종류 author과 quote 중에서 quote를 가져와서 첫번째 span에 넣는다. 
author.innerText = todaysQuote.author; 


//Math.random() 0~1  : 사이의 값을 랜덤하게 가져와 준다. 
//Math.random() * 10 : 0~10 사이의 값을 랜덤하게 가져와 준다. 
//Math.random() 해서 나온 숫자의 정수 값만 가지고 싶다면 
//Math.round() 사용한다. : 반올림 해준다. >Math.round(1.4) <1 , >Math.round(2.9) <3
//Math.ceil() 무조건 한자리 반올림 해준다. >Math.ceil(1.1) <2 , >Math.ceil(2.6) <3
//Math.floor() 내임해준다. >Math.floor(1.999) <1

//>Math.floor(Math.random() * 10)
//<8 ~ 0에서10 까지의 정수값이 랜덤하게 나온다. 

//array의 길이를 알기 위해서 [ ].length 를 사용할 수 있다. 
//>[1,2,3,4,5,6,7].length
//<7