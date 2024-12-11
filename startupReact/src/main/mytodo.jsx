import React from "react"
import "./mytodo.css";

export function MyToDoList() {
  return (
    <div className="mytodo">
      <h3>My To Do List</h3>
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
      <ul id="my-list-items"></ul>
    </div>
  );
};

export default MyToDoList;