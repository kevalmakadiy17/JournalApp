// Importing necessary modules and components from React Router DOM and various pages/components
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import SignupPage from "../pages/SignupPage";
import PrivateRoute from "./PrivateRoute";

// Functional component for managing all routes in the application
export default function AllRoutes() {
  return (
    <Routes>
      {/* Route for the homepage */}
      <Route path="/" element={<Homepage />} />

      {/* Route for the registration page */}
      <Route path="/register" element={<SignupPage />} />

      {/* Route for the login page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Route for the notes page, wrapped with PrivateRoute component */}
      <Route
        path="/notes"
        element={
          // Using PrivateRoute component to protect the NotesPage route
          <PrivateRoute>
            <NotesPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
