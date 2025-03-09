import React from 'react';
import ItemCard from './ItemCard';

const ItemsList = ({ itemsList }) => {
  return (
    <ul>
      {itemsList.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </ul>
  );
};

export default ItemsList;
