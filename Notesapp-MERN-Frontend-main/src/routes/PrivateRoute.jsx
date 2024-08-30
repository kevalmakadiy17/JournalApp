// Importing necessary modules and components from React-Redux and LoginPage
import { useSelector } from "react-redux";
import LoginPage from "../pages/LoginPage";

// Functional component for PrivateRoute
export default function PrivateRoute({ children }) {
  // Accessing the 'auth' state from the Redux store using useSelector
  const { auth } = useSelector((state) => state.userReducer);

  // Checking if the 'auth' state is true (user is authenticated)
  if (auth) {
    // If authenticated, render the children components (passed to PrivateRoute)
    return children;
  }

  // If not authenticated, render the LoginPage component to handle login
  return <LoginPage></LoginPage>;
}
