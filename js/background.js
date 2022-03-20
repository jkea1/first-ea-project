const images = 
["KakaoTalk_20220320_211535411.jpg", "KakaoTalk_20220320_211535411_01.jpg", "KakaoTalk_20220320_211535411_02.jpg","KakaoTalk_20220320_211535411_03.jpg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`; 
// 위의 2줄의 코드로 js에서 html element를 생성했다. 하지만 아직 html이 아닌 js에 있다. 

document.body.appendChild(bgImage); //html의 body 제일 아래에 넣어준다.  prepend() 사용하면 body의 제일 위에 넣어준다. 



