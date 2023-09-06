import React from 'react';
import TabsContainer from './TabsContainer';
import ImageContainer from './ImageContainer';
import InfoContainer from './InfoContainer';

const ProductDetails = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
        <TabsContainer className="order-3 md:order-1 md:w-1/3" />
        <ImageContainer className="order-1 md:order-2 md:w-1/3" />
        <InfoContainer className="order-2 md:order-3 md:w-1/3" />
    </div>

  );
};

export default ProductDetails;
