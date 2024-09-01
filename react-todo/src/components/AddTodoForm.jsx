import { useState } from "react";
import { useListStore } from "../useListStore";

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const addTask = useListStore(state => state.addTask);

  


  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title: text, completed: false });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} >
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter task..." 
      />
      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTodoForm;