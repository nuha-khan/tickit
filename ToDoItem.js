import React, { useState } from "react";

function ToDoItem({ item, index, onDelete }) {
  const [isComplete, setIsComplete] = useState(false);

  function handleCheck(event) {
    setIsComplete(event.target.checked);
  }

  return (
    <li className={isComplete ? "completed" : ""}>
      <input
        type="checkbox"
        onChange={handleCheck}
        checked={isComplete}
      />
      <span>{item}</span>
      <button className="delete-btn" onClick={() => onDelete(index)}>✖</button>
    </li>
  );
}

export default ToDoItem;
