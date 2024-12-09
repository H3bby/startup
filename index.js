/* TIME */

/* TO DO LIST */

const todoAddition = document.getElementById("todotext");
const listItems = document.getElementById("my-list-items");
const addUpdate = document.getElementById("addtask");

let todo = JSON.parse(localStorage.getItem("todolist"));
if (!todo) {
  todo = [];
}

function makeToDoitem() {
    if (todoAddition.value === "") {
      todoAddition.focus();
      return;
    }
  
      let li = document.createElement("li");
      const todoItems = `<div title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div>
                      <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="/images/delete.png" /></div></div>`;
      li.innerHTML = todoItems;
      listItems.appendChild(li);
  
      if (!todo) {
        todo = [];
      }
      let itemList = { item: todoAddition.value, status: false };
      todo.push(itemList);
      setLocalStorage();
      todoAddition.value = "";
    };
