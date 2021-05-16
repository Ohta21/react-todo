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
    const addList = [...lists, { todo }]; //[0{todo: "勉強"},1{todo:"走る"},2{todo: "夜ご飯買う"}]
    setLists(addList);
    setTodo("");
  };

  const deleteTodo = (index: number) => {
    const deleteFilter = lists.filter((list, id) => {
      return id !== index;
    });
    setLists(deleteFilter);
  };

  const editTodo = (todo: string, id: number) => {
    const editLists = lists.map((list, index) => {
      if (id === index) {
        lists.list = todo;
      }
    });
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
        {lists.map((list: List, index: number) => {
          return (
            <TodoItem
              list={list}
              index={index}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Form;
