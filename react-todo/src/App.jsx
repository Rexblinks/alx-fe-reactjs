import React from "react";
import TodoList from "./components/TodoList"; // ✅ required import

function App() {
  return (
    <div>
      <TodoList />  {/* ✅ render the TodoList */}
    </div>
  );
}

export default App;
