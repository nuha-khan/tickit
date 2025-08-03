import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./App.css";

function ToDoList() {
  const [inputItem, setItem] = useState("");
  const [listItem, setListItem] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    if (inputItem.trim() !== "") {
      setListItem((prev) => [...prev, inputItem]);
      setItem("");
    }
  }

  function handleDelete(indexToRemove) {
    setListItem((prev) => prev.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="container">
      <div className="heading">
        <span className="paperclip">📎</span>
        <h1>My Notebook To-Do</h1>
        <span className="doodle">✿</span>
      </div>
      <div className="form">
        <input
          name="inputItem"
          onChange={handleChange}
          type="text"
          value={inputItem}
          placeholder="Write a task..."
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      {listItem.length === 0 ? (
        <p className="empty-msg">
          No tasks yet — just you, your thoughts, and a clean page ☕📖
        </p>
      ) : (
        <ul>
          {listItem.map((item, index) => (
            <ToDoItem
              key={index}
              item={item}
              index={index}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
