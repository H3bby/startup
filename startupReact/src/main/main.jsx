// Main.jsx
import React from "react";
import Timer from "./Timer";
import MyToDoList from "./MyToDoList";
import SharedToDoList from "./SharedToDoList";
import "./index.css";

export function Main() {
  return (
    <main>
      <section id="TOP">
        <div className="welcome">
          <h2>Happy Studying!</h2>
        </div>
        <section className="top">
          {/* Timer Component */}
          <Timer />

          {/* My To-Do List Component */}
          <MyToDoList />
        </section>
      </section>

      {/* Shared To-Do List Component */}
      <section className="bottom">
        <SharedToDoList />
      </section>
    </main>
  );
};

export default Main;