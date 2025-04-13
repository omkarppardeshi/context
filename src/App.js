import React, { useState, useEffect, useRef } from "react";
import TodoContext from "./context/todoContext";
import InputTodo from "./component/input";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const isFirstRender = useRef(true); // 👈 Track first render

  useEffect(() => {
    const stored = localStorage.getItem("To-Do");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 🛑 Skip saving on first render
    }
    localStorage.setItem("To-Do", JSON.stringify(tasks));
  }, [tasks]);

  const addTodo = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTodo = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const allRemove = () => {
    setTasks([]);
  }


  return (
    <TodoContext.Provider value={{ tasks, addTodo, deleteTodo, allRemove }}>
      <div className="App">
        <h1>To-Do App</h1>
        <InputTodo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
