import React from "react";
import { useState } from "react";
import { List } from "./Form";

type Props = { 
  list: List; 
  index: number;
};

const TodoItem: React.VFC<Props> = ({list, index}) => {

  return (
      <div>{list.todo}</div>
  );
};

export default TodoItem;
