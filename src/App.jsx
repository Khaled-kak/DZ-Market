import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-green-700 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Saveurs d’Algérie</h1>
        <p className="text-lg text-gray-600">
          Bienvenue sur votre marketplace dédiée aux produits algériens. Le site est en cours de construction 🚧
        </p>
      </div>
    </Router>
  );
}
