import { useListStore } from "../useListStore";

const TodoList = () => {
const { todos, deleteTask, toggleTask } = useListStore();
 
  

  return (
    <div>
      <h2 >Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span className={`flex-grow mr-4 ${todo.completed ? 'line-through' : ''}`}>
              {todo.title}
            </span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTask(todo.id)}
            />
            <button
              onClick={() => deleteTask(todo.id)}
            
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;