import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Profile from './Profile';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(token !== null);
    }, []);

    return { isAuthenticated };
};

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};


const ProtectedRoute = () => (
    
        <div>
            <Routes>
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile/>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
   
);


// Simple Login component
const Login = () => {
    const handleLogin = () => {
        // Logic to handle login, e.g., setting authentication token in local storage
        localStorage.setItem('authToken', 'your-token');
        window.location.href = '/'; // Redirect to the dashboard after login
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default ProtectedRoute
