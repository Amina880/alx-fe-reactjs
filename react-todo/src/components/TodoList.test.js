import TodoList from './TodoList';
import { render, screen, fireEvent } from '@testing-library/react';

// Test to check if the counter renders correctly
test('renders todo list Component', () => {
    render(<TodoList />)
    //Verify Component Initial Render
    expect (screen.getByText('Eat food')).toBeInTheDocument();
    
})