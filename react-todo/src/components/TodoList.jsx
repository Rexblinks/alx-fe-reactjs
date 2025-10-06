import React, { useState } from "react";

function TodoList() {
  // initial todos with unique ids
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: true }
  ]);
  const [newTodo, setNewTodo] = useState("");

  // add a todo
  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = newTodo.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false }
    ]);
    setNewTodo("");
  };

  // toggle todo completion by id
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // delete todo by id; stop event propagation so toggle doesn't fire
  const deleteTodo = (e, id) => {
    e.stopPropagation();
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {todo.text}{" "}
            <button
              type="button"
              onClick={(e) => deleteTodo(e, todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
