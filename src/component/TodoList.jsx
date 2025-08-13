import TodoItems from "./TodoItems";
import style from "./todolist.module.css";
export default function TodoItem({ Todos, setTodos }) {
  const sortedTodos = Todos.slice().sort((a, b) => a.done - b.done);
  return (
    <div className={style.list}>
      {sortedTodos.map((item) => (
        <TodoItems
          key={item.name}
          item={item}
          Todos={Todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
