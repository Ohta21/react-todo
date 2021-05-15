import React from "react";
import { useState } from "react";
import { List } from "./Form";

type Props = { 
  list: List; 
  index: number;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.VFC<Props> = ({list, index, deleteTodo}) => {

  return (
    <div>
      {list.todo}
      <button onClick={ () => {deleteTodo(index)}}>削除</button>
    </div>
  );
};

export default TodoItem;
