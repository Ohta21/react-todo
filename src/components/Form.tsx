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
    const addList = [...lists, { todo }]; //[todo: "勉強",todo:"走る",todo: "夜ご飯買う"]
    setLists(addList);
    setTodo("");
  };

  const deleteTodo = (index2: number) => {
    const deleteFilter = lists.filter((list, index) => {
      return index2 !== index;
    });
    setLists(deleteFilter);
  };

  const editTodo = (todo: string, index2: number) => {
    const editLists = lists.map((list, index) => {
      if (index2 === index) {
        lists.list = todo;
      }
    });
  };

  const disabled = todo === "";

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
        <button disabled={disabled}>追加</button>
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
