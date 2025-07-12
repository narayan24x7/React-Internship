import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { useState } from "react";

function AddTodo() {
  let [todoText, setTodoText] = useState("")
  let dispatch = useDispatch()

  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(todoText))
    console.log(`Todo Added: ${todoText}`)
    setTodoText("")
  };

  return (
    <form onSubmit={handelSubmit} className="bg-gray-700 text-white p-4 space-x-2">
      <input
        type="text"
        name="todoText"
        className="outline-none border-2 "
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded-lg">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
