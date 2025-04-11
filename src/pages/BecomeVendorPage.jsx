import React from 'react';

export function BecomeVendorPage() {
  return (
    <div className='p-8'>
      <h2 className='text-2xl font-bold text-green-700 mb-4'>Devenir vendeur</h2>
      <p className='text-gray-600 mb-4'>Rejoignez la marketplace Saveurs d’Algérie et vendez vos produits facilement.</p>
      <ul className='list-disc list-inside text-gray-700 mb-6'>
        <li>Inscription simple</li>
        <li>Mise en ligne rapide de vos produits</li>
        <li>Support dédié pour les vendeurs</li>
      </ul>
      <button className='bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition'>Commencer l'inscription</button>
    </div>
  );
}
