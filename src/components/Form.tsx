import { useState } from "react";
import React from "react";
import TodoItem from "./TodoItem";

const Form: React.VFC = () => {
  const [todo, setTodo] = useState("");
  const [lists, setLists] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    const addList = [...lists, todo];
    setLists(addList);
    setTodo("");
  };

  const deleteTodo = (deleteIndex: number) => {
    const deleteFilter = lists.filter((list, index) => {
      return deleteIndex !== index;
    });
    setLists(deleteFilter);
  };

  const editTodo = (todo: string, editIndex: number) => {
    const editLists = lists.map((list, index) => {
      if (editIndex === index) {
        list = todo;
      }
      return list;
    });
    setLists(editLists);
  };

  const isDisabled = todo === "";

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
        <button disabled={isDisabled}>追加</button>
      </form>
      <div>
        {lists.map((list: string, index: number) => {
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
