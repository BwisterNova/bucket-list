import style from "./todoitem.module.css";
export default function TodoItems({ item, Todos, setTodos }) {
  function handleClick(name) {
    // console.log("Clicked", name);

    setTodos(
      Todos.map((Todo) =>
        Todo.name === name ? { ...Todo, done: !Todo.done } : Todo
      )
    );
    //console.log(Todos);
  }
  const className = item.done ? style.completed : "";

  function handleDelete(item) {
    //console.log("Deleted", item);
    setTodos(Todos.filter((Todos) => Todos !== item));
  }

  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={style.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr />
    </div>
  );
}
