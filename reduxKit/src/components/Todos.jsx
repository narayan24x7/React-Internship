import { useSelector, useDispatch } from "react-redux"
import { deleteTodo, toggleComplete, editTodo } from "../features/todoSlice"
import { useState } from "react"

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("")
  const [previousText, setPreviousText] = useState("")

  const handleEdit = (todoId) => {
    setEditingId(todoId)
    const todo = todos.find((todo) => todo.id === todoId);
    if (todo) {
      setPreviousText(todo.text)
      setNewText(todo.text)
    }
  };

  const handleSaveEdit = () => {
    dispatch(editTodo({ id: editingId, newText }))
    setEditingId(null)
    setNewText('')
    setPreviousText('')
  };

  const handleUndoEdit = () => {
    setNewText(previousText)
    setEditingId(null);
    setPreviousText('');
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="bg-gray-600 text-white text-center p-4 mt-3">
      <h1 className="text-2xl font-semibold">Todos List</h1>


      <div className="mt-4">
        <h2 className="text-xl font-semibold">Active Todos</h2>
        {activeTodos.map((todo) => (
          <li key={todo.id} className="flex space-x-4 bg-gray-300 p-3 text-black items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(todo.id))}
              className="mr-2"
            />
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="outline-none p-2 rounded border border-gray-400"
                />
                <button
                  onClick={handleSaveEdit}
                  className="bg-blue-500 text-white rounded-lg p-2 ml-2"
                >
                  Save
                </button>
                <button
                  onClick={handleUndoEdit}
                  className="bg-gray-500 text-white rounded-lg p-2 ml-2"
                >
                  Undo
                </button>
              </>
            ) : (
              <>
                <span className={todo.completed ? "line-through" : ""}>
                  {todo.text}
                </span>
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="bg-yellow-500 text-white rounded-lg p-2 ml-2"
                >
                  Edit
                </button>
              </>
            )}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-600 text-white rounded-lg p-2 ml-2"
            >
              Delete Todo
            </button>
          </li>
        ))}
      </div>


      <div className="mt-4">
        <h2 className="text-xl font-semibold">Completed Todos</h2>
        {completedTodos.map((todo) => (
          <li key={todo.id} className="flex space-x-4 bg-gray-300 p-3 text-black items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(todo.id))}
              className="mr-2"
            />
            <span className="line-through">
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-600 text-white rounded-lg p-2 ml-2"
            >
              Delete Todo
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todos;
