import React from "react";

function Todos({
  todoList,
  HandleCompleted,
  setTodo,
  DeleteTodo,
  toggleModal,
  setEditTodo,
}) {
  return (
    <div className="border-2 border-gray-600 p-3 rounded-lg space-y-3 shadow-lg">
      {todoList.map((todo) => (
        <div
          className="bg-gray-700 p-2 px-4 rounded-md flex justify-between items-center"
          key={todo.id}
        >
          <div className="flex flex-row gap-5 items-center">
            <input
              type="checkbox"
              name=""
              id=""
              className="h-4 w-4"
              checked={todo.completed}
              onChange={() => HandleCompleted(todo.id)}
            />
            <p className={`text-white ${todo.completed ? "line-through" : ""}`}>
              {todo.msg}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded-md"
              onClick={() => {
                setTodo(todo.msg);
                setEditTodo(todo);
                toggleModal();
              }}
            >
              Edit
            </button>

            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md"
              onClick={() => DeleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;
