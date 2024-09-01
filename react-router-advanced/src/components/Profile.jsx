import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


// Dashboard component that contains nested routes
const Profile = () => {
    // useRouteMatch provides the current URL and path
    return (
        <div>
            <ul>
                <li>
                    <Link to={"profile"}>Profile</Link>
                </li>
                <li>
                    <Link to={"settings"}>Settings</Link>
                </li>
                
            </ul>



            {/* Nested routes within the component */}
            <Routes>
                {/* Default route that displays a message */}
                <Route path="/" element= {<h3>Welcome to the Dashboard</h3>} ></Route>
                {/* Nested route for Profile */}
                <Route path="profile details" element={<ProfileDetails />}></Route>
                {/* Nested route for Settings */}
                <Route path="profile settings" element={<ProfileSettings />}></Route>
            </Routes>
        </div>
    );
};

export default Profile




export const ProfileDetails = () => <h3>Profile Details</h3>
export const ProfileSettings = () => <h3>Profile Settings</h3>