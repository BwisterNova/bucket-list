import style from "./form.module.css";
import { useState } from "react";
export default function Form({ Todos, setTodos }) {
  const [Todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...Todos, Todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.InputContainer}>
          <input
            className={style.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={Todo.name}
          />
          <button className={style.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
