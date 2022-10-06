import React from "react";
import useStore from "../database/store";


function TodoListItems() {
  const store = useStore((state) => state);


  return (
    <>
      {store.todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            onClick={() => store.toggleTodo(todo.id)}
            checked={todo.done}
          />
          <input
            type="text"
            value={todo.text}
            onChange={(evt) => store.updateTodo(todo.id, evt.target.value)}
          />
          <button onClick={() => store.removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoListItems />
    </>
  );
}

export default TodoList;