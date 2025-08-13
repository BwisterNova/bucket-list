import style from "./footer.module.css";
export default function Footer({ completedTodos, TotalTodos }) {
  return (
    <div className={style.footer}>
      <span className={style.item}>List completed:{completedTodos}</span>
      <span className={style.item2}>Total Todos:{TotalTodos}</span>
    </div>
  );
}
