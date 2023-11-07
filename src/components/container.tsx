import React, { useState, useEffect } from "react";
import { Todo } from "./todo";

export const Container = () => {
  const [todoItems, setTodoItems] = useState([{ title: "", description: "" }]);

  const addTodoItem = (todoItem: any) => {
    setTodoItems((prevState) => [...prevState, todoItem]);
    console.log(todoItem);
  };

  useEffect(() => {
    console.log(todoItems);
  }, [todoItems]);

  return (
    <div>
      <Todo onAdd={(todoItem: any) => addTodoItem(todoItem)} />
      <div>ListTodo</div>
    </div>
  );
};
