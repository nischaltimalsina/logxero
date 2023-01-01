import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo List", completed: false },
    { id: 2, text: "Find your todos here", completed: false },
    { id: 3, text: "Add your Todo", completed: false },
   
  ]);
  const [editing, setEditing] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState([
    { id: "", text: "", completed: false },
  ]);
  console.log(todos)

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      { id: todos.length + 1, text, completed: false },
    ];
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const startEditing = (id) => {
    setEditing(id);
  };

  const stopEditing = () => {
    setEditing(null);
  };

  const updateTodo = (id, text) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });
    setTodos(newTodos);
    stopEditing();
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className='h-full w-full p-4 font-light text-neutral-500 '>
      <TodoForm addTodo={addTodo} />
      <div className="max-h-60 lg:max-h-96 overflow-y-scroll p-4 ">
      {todos.length < 1 ? (
        <div className='flex flex-col items-center p-4  '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1}
            stroke='currentColor'
            className='w-10 h-10 stroke-red-600'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
            />
          </svg>

          <p className='text-xl'>Nothing to display.</p>
          <p className='text-sm'>Add your todos to display them here.</p>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className='group peer flx gap-6 py-1  items-start  grid grid-cols-12  '>
            <div className='relative group-checked:bg-red-300 flex justify-center items-start col-span-1'>
              <input
                type='checkbox'
                name={todo.id}
                id={todo.id}
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className='opacity-0'
              />
              <label
                htmlFor={todo.id}
                className={` absolute h-6 w-6 top-1 flex justify-center items-center border ${
                  todo.completed ? "bg-emerald-600  " : "bg-white"
                } text-white`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 12.75l6 6 9-13.5'
                  />
                </svg>
              </label>
            </div>

            <div className='w-full flex justify-between gap-4 col-span-11 '>
              {editing === todo.id ? (
                <div className='w-full flex justify-between gap-4'>
                  <input
                    placeholder={todo.text}
                    name='updatedTodo'
                    value={updatedTodo.text}
                    onChange={(e) => setUpdatedTodo(e.target.value)}
                  />

                  <div className='flex gap-2'>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        updateTodo(todo.id, updatedTodo);
                      }}
                      className='text-emerald-600'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>
                    </button>
                    <button className='text-red-600' onClick={stopEditing}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <div className='w-full flex justify-between items-start col-span-11'>
                  <label
                    htmlFor={todo.id}
                    className={`${
                      todo.completed
                        ? "line-through text-neutral-400 bg-transparent"
                        : "bg-transparent "
                    } mx-6 text-lg  text-elipsis truncate hover:whitespace-normal focus:whitespace-normal ease-in-out duration-200  `}>
                    {todo.text}
                  </label>
                  <div className='flex gap-2'>
                    <button
                      className='ml-auto hover:text-amber-500'
                      onClick={() => startEditing(todo.id)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                        />
                      </svg>
                    </button>

                    <button
                      className='ml-auto hover:text-red-500'
                      onClick={() => deleteTodo(todo.id)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))
      )}</div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className='w-full flex gap-3 py-4' onSubmit={handleSubmit}>
      <input
        className={`${
          value === "" ? "w-full" : " w-[calc(100%-2.5rem)]"
        } h-10 rounded-full px-6 outline-neutral-200 outline-offset-1  `}
        type='text'
        value={value}
        placeholder='Add your Todo here...'
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type='submit'
        className={`${
          value === ""
            ? "hidden"
            : "flex items-center justify-center rounded-full h-10 aspect-square bg-emerald-600 text-white"
        } `}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      </button>
    </form>
  );
}
