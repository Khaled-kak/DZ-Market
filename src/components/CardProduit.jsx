import React from 'react';
import { Link } from 'react-router-dom';

export function CardProduit({ id, titre, image }) {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden bg-white">
      <img src={image} alt={titre} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-700 mb-2">{titre}</h3>
        <Link
          to={`/produit/${id}`}
          className="inline-block bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800 text-sm"
        >
          Voir le produit
        </Link>
      </div>
    </div>
  );
}
