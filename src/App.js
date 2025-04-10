import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="text-center p-4">
        <h1 className="text-3xl font-bold text-green-700">Saveurs d’Algérie</h1>
        <p>Bienvenue sur votre marketplace en construction.</p>
      </div>
    </Router>
  );
}
