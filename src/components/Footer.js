import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-8">
      <nav className="mb-4">
        <a href="#" className="mx-4 text-gray-600 hover:text-gray-800 underline">JONATHAN SIMKHAI</a>
        <a href="#" className="mx-4 text-gray-600 hover:text-gray-800 underline">BLAZERS</a>
        <a href="#" className="mx-4 text-gray-600 hover:text-gray-800 underline">VISCOSE</a>
      </nav>
      <div className="mb-4 text-center">
        <h3 className="text-l font-bold mb-2">A NOTE FROM THE EDITOR</h3>
        <p className="mb-4">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day:
          a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.
        </p>
        <div className="flex items-center justify-center">
          <img src="./images/line.png" alt="Line" className="mr-2" />
          <p>By <u>MINNA SHIM</u>, Fashion Editor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
