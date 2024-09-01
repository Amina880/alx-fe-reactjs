import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { render, screen, fireEvent } from '@testing-library/react';

// Test to check if the counter renders correctly
test('renders todo list Component', () => {
    render(<TodoList />)
    //Verify Component Initial Render
    expect (screen.getByText('Eat food')).toBeInTheDocument();
    
})

// Test to check if the  button works
test('add task', () => {
    render(<AddTodoForm />);
    //Simulate click event
    fireEvent.click(screen.getByText('Add Task'))
    expect(screen.getByText('Make bed')).toBeInTheDocument();
})