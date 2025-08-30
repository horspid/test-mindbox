import { useState, type ChangeEvent, type FormEvent } from "react";

import styles from "./Form.module.css";

interface FormProps {
  onAddTodo: (inputValue: string) => void;
  onRemoveAllTodos: () => void;
}

export const Form = ({ onAddTodo, onRemoveAllTodos }: FormProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <form className={styles.todo__form} onSubmit={onSubmitHandler}>
      <button onClick={() => onRemoveAllTodos()}>Remove All</button>
      <div className={styles.todo__inner}>
        <input
          className={styles.todo__input}
          type="text"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setInputValue(event.target.value)
          }
          placeholder="new todo"
          value={inputValue}
        />
        <button className={styles.todo__button}>Добавить Todo</button>
      </div>
    </form>
  );
};
