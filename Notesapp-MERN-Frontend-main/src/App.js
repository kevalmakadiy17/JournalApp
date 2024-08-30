// Importing the component responsible for rendering all routes
import AllRoutes from './routes/Allroutes';

// Importing the Navbar component for the homepage
import { Navbar } from './components/Homepage/Navbar';

// Function for the main App component
function App() {
  return (
    <div className="App">
      {/* Rendering the Navbar component at the top of the application */}
      <Navbar />

      {/* Rendering the component responsible for handling all routes */}
      <AllRoutes />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
