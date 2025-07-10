import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo]= useState("") 
  const [todoList, setTodoList] = useState([])

  const AddTodo = () => {
    setTodoList([...todoList, {id:Date.now(), msg:todo, completed:false}])
    setTodo("")
  }

  const DeleteTodo = (id) => {
    console.log(id)
    const updatedlist = todoList.filter((todo) => (todo.id !== id))
    console.log(updatedlist)
    setTodoList(updatedlist)
  }

  const EditTodo = (id) => {
    const todoToEdit = todoList.find((todo) => (todo.id === id))
    setTodo(todoToEdit.msg)
    const updatedList = todoList.filter((todo) => (todo.id !== id))
    setTodoList(updatedList) 
  }

  const HandleCompleted = (id) => {
    // setTodoList((todo) => {(todo.id == id)?{...todo, completed: !todo.completed}:{todo}})
    const updatedList = todoList.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodoList(updatedList)
    
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem("todoList")
    const parsedTodos = JSON.parse(storedTodos)
    setTodoList(parsedTodos)
  }, [])

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList))
    }
  }, [todoList])


  return (
    <div className="px-52 py-10 flex flex-col gap-5 bg-gray-800 min-h-screen">
      <h1 className='p-4 rounded-xl bg-amber-500 text-white text-2xl shadow-sm text-center'>Todo App With Local Storage</h1>

      <div className='border-2 border-gray-600  rounded-lg flex justify-between items-center shadow-lg overflow-clip'>
        <input type="text" name="" id="" className='w-full outline-none py-2 px-4 text-white text-sm' placeholder='Write Todo...' value={todo} onChange={(e) => (setTodo(e.target.value))}/>
        <button className='bg-green-500 text-white py-2 px-4' onClick={AddTodo}>Add</button>
      </div>
      

      <div className='border-2 border-gray-600 p-3 rounded-lg space-y-3 shadow-lg'>
        {todoList.map((todo) => (
          <div className='bg-gray-700 p-2 px-4 rounded-md flex justify-between items-center' key={todo.id}>
            <div className='flex flex-row gap-5 items-center'>
            <input type="checkbox" name="" id="" className='h-4 w-4' checked={todo.completed} onClick={() => HandleCompleted(todo.id)}/>
            <p className={`text-white ${todo.completed ? 'line-through' : ''}`}>{todo.msg}</p>
            </div>
            <div className='flex flex-row gap-2'>
              <button className='bg-blue-500 text-white px-2 py-1 rounded-md' onClick={() => EditTodo(todo.id)}>Edit</button>
              <button className='bg-red-500 text-white px-2 py-1 rounded-md' onClick={() => DeleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
