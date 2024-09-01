import { create } from 'zustand'
import { persist } from "zustand/middleware";


export const useListStore = create(persist((set) => ({
  todos: [],
  addTask: (todos) => {  
    set((state) => ({ todos: [...state.todos, todos] }));
    
  },
  deleteTask: (id) => {
    set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) }));
    
  },
  toggleTask: (id) => {
    set((state) => {
        const updatedTasks = state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
       updatedTasks.sort((a, b) => a.completed - b.completed);

      return { todo: updatedTasks };
    });
    
  }})))