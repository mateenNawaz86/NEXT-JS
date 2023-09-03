import React from "react";
import { Todo } from "../../typings";
import Link from "next/link";

// Here we define a todo function
const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: Todo[] = await response.json();
  return data;
};

const TodoList = async () => {
  const todos = await fetchTodos();
  
  return (
    <>
      {todos.map((item) => (
        <p key={item.id}>
          <Link href={`/todos/${item.id}`}>Todo: {item.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodoList;
