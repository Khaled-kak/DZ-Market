import React from 'react';
import { CardProduit } from '../components/CardProduit';

export function HomePage() {
  const produits = [
    {
      id: '1',
      titre: 'Huile d’olive Kabyle 1L',
      image: 'https://images.unsplash.com/photo-1600185365929-3f0495c31e65?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '2',
      titre: 'Dattes Deglet Nour',
      image: 'https://images.unsplash.com/photo-1623088643162-c5d4145589e1?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '3',
      titre: 'Couscous artisanal',
      image: 'https://images.unsplash.com/photo-1605518327286-753c225bfb46?auto=format&fit=crop&w=600&q=80',
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
