// Import the necessary modules
import "./style.css";
import { MainProvider } from "./context/MainContext";
import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import Container from "./components/Main/Container";

// Define your App component
function App() {
  return (
    <MainProvider>
      <Container />
    </MainProvider>
  );
}

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(<App />);

// Export your App component
export default App;
