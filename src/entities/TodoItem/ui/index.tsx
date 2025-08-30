import styles from "./TodoItem.module.css";

interface TodoItemProps {
  data: ITodoItem;
  removeTodo: (id: string) => void;
  changeTodo: (id: string) => void;
}

export interface ITodoItem {
  id: string;
  name: string;
  completed: boolean;
}

export const TodoItem = ({ data, removeTodo, changeTodo }: TodoItemProps) => {
  return (
    <div className={styles.todo__item}>
      <input type="checkbox" onClick={() => changeTodo(data.id)} />
      <div className={`${data.completed && styles["todo__item--completed"]}`}>
        {data.name}
      </div>
      <button
        className={styles.todo__remove}
        onClick={() => removeTodo(data.id)}
      >
        X
      </button>
    </div>
  );
};
