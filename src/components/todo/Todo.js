import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

function Todo() {
  const [thought, setThought] = useState("");
  // const initialTodos = JSON.parse(Cookies.get('todos')) || [];
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   Cookies.set('todos', todos, {expires: 2});
  // }, [todos])

  const submitHandler = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setTodos((prev) => [...prev, { id, thought }]);
    setThought("");
  };

  const removeTodo = (toRemove) => {
    setTodos((prev) => {
        return prev.filter(item => item.id !== toRemove.id);
    })
  }

  const markAsDone = (e) => {
    const item = e.target.closest('.todo-item')
    item.classList.toggle('mark-done');
  }

  const editTodo = (e) => {
    e.target.contentEditable = true;
  }

  return (
    <section className="todo-container">
      <div className="add-todo">
        {/* <h2 className="todo-title">What's on your mind</h2> */}
        <div className="fancy-input">
          <form onSubmit={submitHandler}>
            <input
              className="thought-input"
              placeholder="What's on your mind..."
              value={thought}
              onChange={(e) => setThought(e.target.value)}
            />
          </form>
        </div>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li className="todo-item" key={todo.id}>
              <div className="todo-item">
                <div className="todo-buttons">
                  <button className="todo-button done-button" onClick={(e) => markAsDone(e)}>✔️</button>
                  <button className="todo-button remove-button" onClick={() => removeTodo(todo)}>❌</button>
                </div>
                <p className="todo-text" onClick={(e) => editTodo(e)}>{todo.thought}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Todo;
