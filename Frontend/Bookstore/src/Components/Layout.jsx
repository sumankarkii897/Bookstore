import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (menuState) => {
    setIsMenuOpen(menuState);
  };

  return (
    <>
      <Navbar onMenuToggle={handleMenuToggle} />
      <div className={`mt-28 ${isMenuOpen ? 'mt-40' : 'mt-28'} transition-all`}>
        {children}
      </div>
    </>
  );
}