import React, { useState, useEffect } from "react";

const useTodos = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const AddTodo = (todo) => {
    setTodoList( (prevTodos) => [{id: Date.now(), msg: todo, completed: false}, ...prevTodos] )
  };

  const DeleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const EditTodo = (updatedTodo) => {
  setTodoList((prevTodos) =>
    prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
  );
};

  const HandleCompleted = (id) => {
    setTodoList((prevTodos) => prevTodos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo ));
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todoList");
    const parsedTodos = JSON.parse(storedTodos);
    if (parsedTodos && parsedTodos.length > 0) {
      setTodoList(parsedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return {
    todo,
    setTodo,
    todoList,
    setTodoList,
    AddTodo,
    DeleteTodo,
    EditTodo,
    HandleCompleted,
  };
};

export default useTodos;
