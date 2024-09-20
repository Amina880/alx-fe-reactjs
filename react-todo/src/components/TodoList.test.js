import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

// Test to check if the counter renders correctly
test('renders todo list Component', () => {
    render(<TodoList />)
    //Verify Component Initial Render
    expect (screen.getByText('Todo List')).toBeInTheDocument();
    
})

// Test to check if the  button works
test('add task', () => {
    render(<AddTodoForm />);
    //Simulate click event
    fireEvent.click(screen.getByText('Add Task'))
    expect(screen.getByText('Add Task')).toBeInTheDocument();
})