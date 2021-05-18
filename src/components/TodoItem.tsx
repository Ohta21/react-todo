import React from "react";
import { useState } from "react";

type Props = {
  list: string;
  index: number;
  deleteTodo: (index: number) => void;
  editTodo: (text: string, index: number) => void;
};

const TodoItem: React.VFC<Props> = ({ list, index, deleteTodo, editTodo }) => {
  const [currentTodo, setCurrentTodo] = useState(list);

  const isDisabled = currentTodo === "";

  return (
    <div>
      {list}
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
            disabled={isDisabled}
            onClick={(e) => {
              e.preventDefault();
              editTodo(currentTodo, index);
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
