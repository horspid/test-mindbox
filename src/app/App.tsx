import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { type ITodoItem } from "../entities/TodoItem/ui";

import Container from "../shared/Container/Container";
import styles from "./App.module.css";

import { Form } from "../features/Form";
import { TodoItem } from "../entities/TodoItem";

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const onAddTodoHandler = (userInput: string) => {
    if (!userInput) return;

    const newTodo = {
      id: uuidv4(),
      name: userInput,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const onRemoveTodo = (id: string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const onChangeStatusTodo = (id: string) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      ),
    ]);
  };

  return (
    <Container>
      <section className={styles.todo}>
        <h1 className={styles.todo__title}>Todos</h1>

        <Form onAddTodo={onAddTodoHandler} />
        {todos &&
          todos.map((todo) => (
            <TodoItem
              data={todo}
              key={todo.id}
              removeTodo={onRemoveTodo}
              changeTodo={onChangeStatusTodo}
            />
          ))}
      </section>
    </Container>
  );
}

export default App;
