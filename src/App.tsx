import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import BookComponent from "./Book";
import Header from "./components/Header";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("access_token")
  );

  return (
    <Router>
      <>
        {isAuthenticated && <Header setIsAuthenticated={setIsAuthenticated} />}
      </>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <SignIn setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/book"
          element={isAuthenticated ? <BookComponent /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
