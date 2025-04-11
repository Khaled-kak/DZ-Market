import React from 'react';
import { CardProduit } from '../components/CardProduit';

export function HomePage() {
  const produits = [
    {
      id: '1',
      titre: 'Huile d’olive Kabyle 1L',
      image: 'https://via.placeholder.com/300x200?text=Huile+d%27olive',
    },
    {
      id: '2',
      titre: 'Dattes Deglet Nour Premium',
      image: 'https://via.placeholder.com/300x200?text=Dattes+Deglet+Nour',
    },
    {
      id: '3',
      titre: 'Couscous artisanal 1kg',
      image: 'https://via.placeholder.com/300x200?text=Couscous+artisanal',
    },
  ];

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold text-green-700 mb-6'>Catalogue de produits</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {produits.map((produit) => (
          <CardProduit
            key={produit.id}
            id={produit.id}
            titre={produit.titre}
            image={produit.image}
          />
        ))}
      </div>
    </div>
  );
}
