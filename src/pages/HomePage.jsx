import React from 'react';
import { CardProduit } from '../components/CardProduit';

export function HomePage() {
  const produits = [
    {
      id: '1',
      titre: 'Huile d’olive Kabyle 1L',
      image: 'https://source.unsplash.com/600x400/?olive-oil',
    },
    {
      id: '2',
      titre: 'Dattes Deglet Nour',
      image: 'https://source.unsplash.com/600x400/?dates',
    },
    {
      id: '3',
      titre: 'Couscous artisanal',
      image: 'https://source.unsplash.com/600x400/?couscous',
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
