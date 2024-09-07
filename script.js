let currentIndex = 3;

function addTodo(){
  const InputElement = document.getElementById("inp");
  const todo_name = InputElement.value.trim();
  
  if(todo_name === ""){
      alert("please enter a todo");
      return;
  }

  const parentElement = document.getElementById("todos");

  const new_todo = document.createElement('div');
  new_todo.setAttribute("id",'todo-' + currentIndex,);
  new_todo.setAttribute("style",'display: flex;justify-content: space-between');

  const new_heading = document.createElement('h4');
  new_heading.textContent = currentIndex + ". " + todo_name;

  const newButton = document.createElement('button');
  newButton.textContent = 'Delete';
  newButton.setAttribute("onclick", "deleteTodo(" + currentIndex + ")"  );
  newButton.setAttribute("margin-top",'5px')


  

  new_todo.appendChild(new_heading);
  new_todo.appendChild(newButton);


  parentElement.appendChild(new_todo);

  currentIndex++;

  InputElement.value = '';

}

function deleteTodo(index){

  const element = document.getElementById("todo-" + index);

  if(element){
      element.parentNode.removeChild(element);
  }
  currentIndex--;
}
