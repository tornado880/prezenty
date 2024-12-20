import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";

import "./App.css";

function App() {
    return (
        <div className="App">
            

            <Router>

                <Routes>
                    <Route path="/Polska" element={<Home />} />

                    <Route path="/Polska/Admin" element={<Admin />} />

                    <Route path="*" element={<Home />} />  {/* Fallback route for unmatched paths */}
                </Routes>

            </Router>
        </div>
    );
}

export default App;
