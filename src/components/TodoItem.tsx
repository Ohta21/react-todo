import React from "react";
import { useState } from "react";
import { List } from "./Form";

const TodoItem = ({ lists }: { lists: any }) => {
  const [currentTodo, setCurrentTodo] = useState(lists.todo);
  return (
    <>
      <div>{currentTodo}</div>
    </>
  );
};

// const TodoItem: React.VFC<Props> = ({ lists }) => {
//   return <div>{lists.todo}</div>;
// };

export default TodoItem;
