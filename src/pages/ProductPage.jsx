import React from 'react';
import { useParams } from 'react-router-dom';

export function ProductPage() {
  const { id } = useParams();
  return (
    <div className='p-8'>
      <h2 className='text-2xl font-bold text-green-700 mb-4'>Fiche produit</h2>
      <p className='text-gray-600'>Détails du produit ID : {id}</p>
    </div>
  );
}
