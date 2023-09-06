import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
     <Header />
      <div className="container mx-auto">
        {/** PRODUCT PAGE  */}
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
