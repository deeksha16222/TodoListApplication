import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handleToDoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleToDoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
