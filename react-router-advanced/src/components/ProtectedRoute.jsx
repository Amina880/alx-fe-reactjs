import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import App from '../App';

const AuthWrapper = ({ children }) => {
  if (Parse.User.current() !== null) {
    let isAuthenticated = Parse.User.current().getSessionToken();
    let authCondition = isAuthenticated !== undefined;
    if (authCondition) {
      return children;
    }
  }
  return <Navigate to={"/login"} />;
};







// Function that checks if the user is authenticated
const isAuthenticated = () => {
    // Replace with your authentication logic, for instance checking if a token exists in local storage
    return localStorage.getItem('authToken') !== null;
};


// Custom Route component that checks for authentication
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                // If authenticated, render the component
                <Component {...props} />
            ) : (
                // If not authenticated, redirect to the login page
                <redirect to="/login" />
            )
        }
    />
);


const ProtectedRoutesExample = () => (
    
        <div>
            <Routes>
                /* Public route to Login component */
                //<Route path="/login" element={Login} />

                {/* Protected route to Dashboard component */}
                /*<Route path="/dash/*" element={ 
                    <AuthWrapper>
                    <Dashboard />
                    </AuthWrapper>}
                    />

            </Routes>

        </div>
    
);

// Simple Login component
const Login = () => {
    const handleLogin = () => {
        // Logic to handle login, e.g., setting authentication token in local storage
        localStorage.setItem('authToken', 'your-token');
        window.location.href = '/dash'; // Redirect to the dashboard after login
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default ProtectedRoutesExample
