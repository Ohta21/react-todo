import { useState } from "react";
import React from "react";
import TodoItem from "./TodoItem";

export type List = {
  todo: string;
};

const Form: React.VFC = () => {
  const [todo, setTodo] = useState("");
  const [lists, setLists] = useState<List[]>([]);

  const addTodo = (todo: string) => {
    alert(todo);
    const addList = [...lists, { todo }];
    setLists(addList);
    setTodo("");
  };

  const isUncreable = todo === "";

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(todo);
        }}
      >
        <input
          type="text"
          placeholder="入力してください"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button disabled={isUncreable}>追加</button>
      </form>
      <div>
        {lists.map(() => {
          return <TodoItem lists={lists} />;
        })}
      </div>
    </div>
  );
};
export default Form;
