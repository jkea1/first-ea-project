const toDoForm = document.getElementById("todo-form");
//const toDoInput = toDoForm.querySelector("input"); //document로 하면 전체 html을 찾아볼 수 있다. ToDoForm 으로 하면 그 안에서 input을 찾을 수 있다. 
const toDoInput = document.querySelector("#todo-form input"); //으로도 가능하다. 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];//paintTodo가 될 때 마다 그 텍스트를 array에 push 하고 싶다. 


function saveToDos() { //이 함수는 toDos array의 내용을 localStorage에 넣는거다. 
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) //todo들을 save 할수 있다. 하지만 단순 text가 아니라 array로 저장되게 하려면 JSON.stringify 하면 된다. 
}; //바꾼 string을 JSON.parse 안에 넣으면 실제로 무언가를 할 수 있는 배열을 얻게 된다. 

function deleteToDo(event) {
  const li = event.target.parentElement; //어떤 버튼이 눌러진 것인지 알수 있다.  
  li.remove();
  toDos = toDos.filter((toDo) => toDo !== parseInt(li.id));
  saveToDos();
};
//function 안의 변수 선언언 함수 내에서는 적용 되는걸로 알고 있어 

function paintToDo(newTodo) { //toDo를 그리는 역할 담당
  const li = document.createElement("li"); //html에 li 만들어 주었다. 
  li.id = newTodo.id;
  const span = document.createElement("span"); //span은 li안에 있지 않다는데 무슨 말이지
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";//위도우 이모지 단축키 윈도우+. 한꺼번에 누르면 된다. 
  button.addEventListener("click", deleteToDo); //버튼이 눌린것을 확인하기 위해서 eventListener을 사용해야 한다. 
  li.appendChild(span); //이제 li는 span이라는 자식을 가지게 됐다. append 하면 뒤에 놓인다. 
  li.appendChild(button); //버튼을 list에 달기  
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) { //js 가 방금 발생한 event는 함수의 첫번째 인자로 준다.  
  event.preventDefault(); //창에 입력을 하고 enter을 쳐도 새로고침이 안 일어난다. 
  //html의 input에 대한 값을 얻고 싶다. 우선 무시
  const newTodo = toDoInput.value;//input value를 비우기 전에 그 값을 저장해 보자. 새로운 변수에 저장해 두는 거다.
  toDoInput.value = "";//enter를 누를때 마다, 입력한 것을 비우고 싶을때 
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
};

toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello(item){
  console.log("this is the turn of", item);
};

const savedToDos = localStorge.getItem();

//아무것도 투두리스트에 입력하지 않았을 경우 저장된게 아무것도 없다. 
if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //새로고침하면 전에 저장했던게 사라지는 것을 막는다. 
  parsedToDos.forEach(paintToDo); 
  //forEach는 array의  각 item 에 대한 function을 실행하게 해준다. 
  // parsedToDos.forEach(paintToDo); 이 줄을 통해 paintToDo({text:"a", id:121212121})
  //위에 따로 sayHello 함수를 쓰지 않는 대신
  // arsedToDos.forEach((item) => console.log("this is the turn of", item)) 으로 대체할 수 있다. 
};
//array의 item을 유지하고 싶으면 true를 return해야 한다. 
//예시 
//>const arr = [1234, 5454, 223, 122, 45, 6775, 334]
//<undefined
//>function sexyfunction(potato) { return potato <= 1000}
//<undefined>
//>arr.filter(sexyFunction)
//<[223, 122, 45, 334]
function sexyFilter() { //sexyFilter 함수는 반드시 true를 리턴해야 한다



}
