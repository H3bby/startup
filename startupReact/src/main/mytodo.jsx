import React, {useState, useEffect} from "react"
import "./mytodo.css";

export function MyToDoList() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");  
   
  /* get from local */
  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem("todolist"));
    if (savedTodo) {
      setTodo(savedTodo);
    }
  }, []);
  
  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem("todolist", JSON.stringify(todo));
    }
  }, [todo]);
    
  /* functions */
  const AddTodo = () => {
    if (inputValue === "") {
      return;
    }
    const newTodo = { item: inputValue, status: false };
    setTodo((prevTodo) => [...prevTodo, newTodo]);
    setInputValue("");
  };
    
  const CompleteTodo = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index].status = !updatedTodo[index].status;
    setTodo(updatedTodo);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  return (
    <div className="mytodo">
      <h3 className="todotitle">My To Do List</h3>
      <div className="todo">
        <input
          type="text"
          id="todotext"
          className="todoinput"
          placeholder="Add task"
        />
        <img
          className="plusimg"
          id="addtask"
          src="plus.png"
          alt="Add"
          onClick={() => console.log("Task added!")}
        />
      </div>
      <ul id="my-list-items">
        {todo.map((task, index) => (
            <li key={index}>
              <div class="Complete" onDoubleClick={() => CompleteTodo(index)}
              style={{textDecoration: task.status ? "line-through" : "none",
              }}
              >
              {task.item}
              {task.status && (
                <img className="todo-controls" src="/images/check-mark.png" alt="Completed"/>
              )}
              </div>
              <div><img className="delete todo-controls" onClick={() => handleDeleteTodo(index)} src="/images/delete.png" alt="Delete"/>
              </div>
            </li> 
          ))}
      </ul>
    </div>
  );
};

export default MyToDoList;