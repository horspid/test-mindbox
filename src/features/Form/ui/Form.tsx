import { useState, type ChangeEvent, type FormEvent } from "react";

import styles from "./Form.module.css";

interface FormProps {
  onAddTodo: (inputValue: string) => void;
}

export const Form = ({ onAddTodo }: FormProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  };

  const onAddTodoHandler = () => {};

  return (
    <form className={styles.todo__form} onSubmit={onSubmitHandler}>
      <input
        className={styles.todo__input}
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
        placeholder="new todo"
        value={inputValue}
      />
      <button className={styles.todo__button} onClick={onAddTodoHandler}>
        Добавить Todo
      </button>
    </form>
  );
};
