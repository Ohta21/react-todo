import React from "react";
import { useState } from "react";
import { List } from "./Form";

type Props = {
  list: List;
  index: number;
  deleteTodo: (index: number) => void;
  editTodo: (text: string, index: number) => void;
};

const TodoItem: React.VFC<Props> = ({ list, index, deleteTodo, editTodo }) => {
  const [currentTodo, setCurrentTodo] = useState(list.todo);

  const isUncreable = currentTodo === "";

  return (
    <div>
      {list.todo}
      <button
        onClick={() => {
          deleteTodo(index);
        }}
      >
        削除
      </button>
      <div>
        <form>
          <input
            type="text"
            placeholder="ここで編集してください"
            onChange={(e) => setCurrentTodo(e.target.value)}
            value={currentTodo}
          />
          <button
            disabled={isUncreable}
            onClick={(e) => {
              e.preventDefault();
              editTodo(currentTodo, index);
              setCurrentTodo("");
            }}
          >
            編集
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoItem;
