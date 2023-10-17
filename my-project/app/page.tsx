import React, { Suspense } from "react";
import TodoList from "./(users)/todos/TodoList";

const page = () => {
  return (
    <div className="flex flex-col space-y-10">
      <Suspense
        fallback={<p className="text-red-500">Loading the Todos.....</p>}
      >
        <h1>Loading Todos</h1>
        <div className="flex sapce-x-2">
          <TodoList />
        </div>
      </Suspense>
      <Suspense
        fallback={
          <p className="text-orange-500">Loading the Todos Trolley.....</p>
        }
      >
        <h1>Loading Todos</h1>
        <div className="flex sapce-x-2">
          <TodoList />
        </div>
      </Suspense>
    </div>
  );
};

export default page<Suspense>;
