import React from "react";
import "./about.css";

export function About() {
  return (
      <main>
        <h2>What is Pomodoro?</h2>
        <div id="text-and-image">
          <div>
            <p>
              The Pomodoro technique is a time management technique that helps you focus in small bursts,
              called pomodoros. <br /> Breaking your productivity into smaller, more manageable sessions helps prevent
              burnout and reduce procrastination.
            </p>
            <ol type="1">
              <li>Focus on a task for 25 minutes with no distractions</li>
              <li>Take a break for 5 minutes</li>
              <li>After 4 focus sessions (pomodoros), take a 30 minute break</li>
              <li>Repeat as many times as needed</li>
            </ol>
            <p>
              The Pomodoro technique was invented by Francesco Cirillo in the 1980s when he was struggling to
              focus in college. <br /> He decided to use a tomato kitchen timer to work in 25-minute increments.
              Pomodoro means "tomato" in Italian.
            </p>
          </div>
          <div id="images">
            <div id="img1">
              <img src="books.jpg" alt="Studying Books" height="100" />
            </div>
            <div id="img2">
              <img src="girls_studying.jpg" alt="Girls Studying" height="100" />
            </div>
          </div>
        </div>
      </main>
  );
};

export default About;