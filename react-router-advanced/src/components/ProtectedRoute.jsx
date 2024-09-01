import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import App from '../App';
import { useState, useEffect } from 'react';

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


const ProtectedRoutes = () => (
    <Router>
        <div>
            <Routes>
                {/* Public route to Login component */}
                <Route path="/login" element={<Login />} />
                {/* Protected route to Dashboard component */}
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <App />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    </Router>
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

export default ProtectedRoutes
