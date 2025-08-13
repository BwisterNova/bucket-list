import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [Todos, setTodos] = useState([]);
  const completedTodos = Todos.filter((Todo) => Todo.done).length;
  const TotalTodos = Todos.length;
  return (
    <div>
      <Form Todos={Todos} setTodos={setTodos} />
      <TodoList Todos={Todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} TotalTodos={TotalTodos} />
    </div>
    // {console.log(Todos)} meant to be inside the div below TodoList
  );
}
