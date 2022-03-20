const clock = document.querySelector("h2#clock");

//function getClock() {
 //const date = new Date(); //변수 date가 들어간거 매시간 새로운 시간이 들어가게 해준다. 
 //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//};

//01 과 같이 표현하고 싶다면 
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0"); //Sring() 숫자를 문자열strig으로 바꿀수 있다. 
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;  
};

getClock(); //website가 load되자마자 getClock()을 실행해서 시간이 뜨게 하고 setInterval을 통해 매초마다 시간이 나고게 한다. 
//setinterval() 예를 들어 몇초에 한번씩 function이 일어나게 도와 준다. 
setInterval(getClock, 1000);  //5000은 5000ms을 의미 = 5s

//setTimeout(sayHello,5000); 앞에 호출하려는 function을 넣고, 뒤에 얼마나 기다릴지 ms 단위로 넣기 
//console 에서 date.getHours() , date.getMinutes(), date.getSeconds() 하면 몇시 몇분 인지 알 수 있다. 
//new Date().getHours(), new Date().getminutes() 하면 새로운 몇시인지와 몇분인지를 알 수 있다. 
//최종적으로 콘솔에 1초 마다 새로운 시,분,초 가 나오게 되었다. 
//다만 초가 나올때 2 가 아닌 02로 나오게 하고 싶다. 
//padstart() 최소몇글자오게 하고, 부족하면 0 같은 걸 앞에 넣을 수 있게 한다. 
// >"1".padStart(2,"0") 
// <"01"
// >"12".padstart(2,"0")
// <"12"
// "1".padEnd(2, "0") , padEnd는 뒤에 0을 넣게 해준다. 
// <"10"
// "hello".padStart(20, "x")
// "xxxxxxxxxxxxxxxhello"