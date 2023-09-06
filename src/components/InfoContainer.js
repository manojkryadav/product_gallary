import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor, setSize } from '../features/product/productSlice';

const InfoContainer = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const handleColorChange = (color) => {
    dispatch(setColor(color));
  };

  const handleSizeChange = (size) => {
    dispatch(setSize(size));
  };

  return (
    <div className="w-full md:w-1/3 p-4 border rounded-lg cursor-default">
      <h1 className="text-2xl mb-2 text-center md:text-left text-6xl">JONATHAN SIMKHAI</h1>
      <p className="mb-4 text-center md:text-left text-xl">PLurex Linen Viscose Jacket in Conchiglia</p>
      <p className="text-lg font-bold mb-4 text-center md:text-left">$225</p>
      <div className="text-lg font-bold mb-2 text-center md:text-left">Color: {product.color.charAt(0).toUpperCase() + product.color.slice(1)}</div>
      <div className="flex justify-center md:justify-start space-x-4 mb-4">
        <img src="./images/thumb2.png" alt="Grey"
          className={`cursor-pointer w-1/4 p-2 border rounded-lg ${product.color === 'grey' ? 'border-black' : ''}`}
          onClick={() => handleColorChange('grey')}
        />
        <img src="./images/thumb1.png" alt="Black"
          className={`cursor-pointer w-1/4 p-2 border rounded-lg ${product.color === 'black' ? 'border-black' : ''}`}
          onClick={() => handleColorChange('black')}
        />
      </div>
    <div className="flex justify-center md:justify-between mb-4">
        <div className="mr-2 text-lg font-bold text-left">SIZE: {product.size.toUpperCase()}</div>
        <span>&nbsp;</span>
        <a href="#" className="text-lg"><u>SIZE GUIDE</u></a>
      </div>
      <div className="flex justify-center md:justify-start space-x-4 mb-4">
        {['xs', 's', 'm', 'l', 'xl'].map((size, index) => (
          <div key={index}
            className={`cursor-pointer w-1/5 p-2 border rounded-2xl ${size === 'm' ? 'line-through' : ''} ${product.size === size ? 'bg-black text-white' : ''} ${product.size === size  ? "cursor-default" : "hover:border-black"}`}
            onClick={size !== 'm' ? () => handleSizeChange(size) : null}>
              {size.toUpperCase()}
          </div>
        ))}
      </div>
      <button className="w-full py-2 bg-black text-white rounded-lg mb-4 flex justify-center items-center">
        <span>Add To Bag</span> <img src="./images/Menu.png" alt="arrow-right" className="ml-2" />
      </button>
      <p className="text-lg text-center md:text-left mb-4">Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
      <p className="text-lg text-center md:text-left">Speak to a Personal Stylist CHAT NOW</p>
    </div>
  );
};

export default InfoContainer;
