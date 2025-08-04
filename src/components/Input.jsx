import React, { useEffect } from "react";

function Input({ todo, setTodo, AddTodo, EditTodo, isModalOpen, toggleModal, editTodo, setEditTodo }) {
  
  useEffect(() => {
    if (editTodo) {
      setTodo(editTodo.msg);
    }
  }, [editTodo]);

  const handleAddOrEdit = () => {
    if (editTodo) {
      EditTodo({ ...editTodo, msg: todo });
      setEditTodo(null);
    } else {
      AddTodo(todo);
    }
    setTodo("");
    toggleModal();
  };

  const handleCancel = () => {
    setTodo("");
    setEditTodo(null);
    toggleModal();
  };

  if (!isModalOpen) {
    return (
      <div className='flex w-full justify-end'>
        <button onClick={toggleModal} className='bg-blue-500 text-white px-4 py-2 rounded-md w-fit'>+ Add New</button>
      </div>
    );
  }

  return (
    <>
      <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
        <div className='bg-gray-800 p-6 rounded-lg shadow-lg text-white w-96 space-y-5'>
          <div className="flex justify-between items-center mb-4">
            <h2 className='text-xl font-medium'>{editTodo ? "Edit Todo" : "Add Todo"}</h2>
            <button onClick={handleCancel} className="hover:bg-gray-600 px-4 py-2 rounded-md">X</button>
          </div>

          <div className="space-y-2">
            <p>Title:</p>
            <div className='border-2 border-gray-600  rounded-lg flex justify-between items-center shadow-lg overflow-clip'>
              <input type="text" className='w-full outline-none py-2 px-4 text-sm' placeholder='Write Todo...' value={todo} onChange={(e) => setTodo(e.target.value)} />
            </div>
          </div>

          <div className="flex justify-end items-center mb-4 space-x-2">
            <button onClick={handleCancel} className='bg-red-500 text-white px-4 py-2 rounded-md'>Cancel</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={handleAddOrEdit}>
              {editTodo ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
