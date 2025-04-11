import React from 'react';
import { Link } from 'react-router-dom';

export function Layout({ children }) {
  return (
    <div>
      <header className='bg-green-700 text-white p-4'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <Link to='/' className='text-xl font-bold'>Saveurs d’Algérie</Link>
          <nav className='space-x-4'>
            <Link to='/devenir-vendeur' className='hover:underline'>Devenir vendeur</Link>
            <Link to='/a-propos' className='hover:underline'>À propos</Link>
            <Link to='/panier' className='hover:underline'>Panier</Link>
          </nav>
        </div>
      </header>
      <main className='max-w-6xl mx-auto p-4'>{children}</main>
      <footer className='bg-gray-100 text-center p-4 mt-10 text-sm text-gray-500'>
        © {new Date().getFullYear()} Saveurs d’Algérie — Tous droits réservés.
      </footer>
    </div>
  );
}
