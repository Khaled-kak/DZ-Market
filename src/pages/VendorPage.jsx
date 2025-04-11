import React from 'react';
import { useParams } from 'react-router-dom';

export function VendorPage() {
  const { id } = useParams();
  return (
    <div className='p-8'>
      <h2 className='text-2xl font-bold text-green-700 mb-4'>Boutique du vendeur</h2>
      <p className='text-gray-600'>ID vendeur : {id}</p>
    </div>
  );
}
