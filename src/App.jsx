import "./App.css";
import Todos from "./components/Todos";
import useTodos from "./hooks/useTodo";
import { useState } from "react";
import Input from "./components/Input";

function App() {
  const {
    todo,
    setTodo,
    todoList,
    setTodoList,
    AddTodo,
    DeleteTodo,
    EditTodo,
    HandleCompleted,
  } = useTodos();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="px-52 py-10 flex flex-col gap-5 bg-gray-800 min-h-screen">
      <h1 className="p-4 rounded-xl bg-amber-500 text-white text-2xl shadow-sm text-center">
        Todo App With Local Storage
      </h1>

      <Input
        todo={todo}
        setTodo={setTodo}
        AddTodo={AddTodo}
        EditTodo={EditTodo}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      <Todos
        todoList={todoList}
        HandleCompleted={HandleCompleted}
        setTodo={setTodo}
        DeleteTodo={DeleteTodo}
        toggleModal={toggleModal}
        setEditTodo={setEditTodo}
      />
    </div>
  );
}

export default App;
