import { Todo } from "../../../typings";
import React from "react";
import { notFound } from "next/navigation";

type pageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,

    // next automatically revalidate the page after 60 seconds
    { next: { revalidate: 60 } }
  );

  // convert the json data into javaScript string
  const todo: Todo = await res.json();
  return todo;
};

const TodoPage = async ({ params: { todoId } }: pageProps) => {
  const todoData = await fetchTodo(todoId);

  // if the query id result is not found
  if (!todoData.id) return notFound();

  return (
    <>
      <div className="p-10 bg-yellow-400 border-2 m-2 shadow-lg rounded">
        <p>
          #{todoData.id}: {todoData.title}
        </p>
        <p>Completed: {todoData.completed ? "Yes" : "No"}</p>
        <p className="border-t border-black mt-5 text-right">
          By User: {todoData.userId}
        </p>
      </div>
    </>
  );
};

export default TodoPage;

// function for generating a static params
export const generateStaticParams = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: Todo[] = await response.json();

  // getting the first 10 results from the coming array
  const terminatedRes = data.splice(0, 10);

  // return the todo id into string
  return terminatedRes.map((item) => ({
    todoId: item.id.toString(),
  }));
};
