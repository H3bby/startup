import React from "react";

export function SharedToDoList() {
  return (
    <div className="shared-to-do">
      <h3>Shared To Do List</h3>
      <h5 id="members">Shelby, Alice, Jeff</h5>
      <div className="todo">
        <input
          type="text"
          id="todotext2"
          className="todoinput"
          placeholder="Add task"
        />
        <img
          className="plusimg"
          src="plus.png"
          alt="Add"
          onClick={() => console.log("Shared task added!")}
        />
      </div>
      <h5 id="message"></h5>
      <ul className="my-list-items"></ul>
    </div>
  );
};

export default SharedToDoList;