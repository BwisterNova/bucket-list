import style from "./header.module.css";
export default function Header() {
  return (
    <div className={style.header}>
      <span className={style.fadeIn}>My Quick Todo</span>
    </div>
  );
}
