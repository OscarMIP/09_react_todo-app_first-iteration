import React from 'react';

const ItemCard = ({ item }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'done':
        return { textDecoration: 'line-through', color: 'green' };
      case 'in progress':
        return { fontWeight: 'bold', color: 'blue' };
      case 'pending':
        return { fontWeight: 'normal', color: 'grey' };
      default:
        return { fontWeight: 'normal', color: 'black' };
    }
  };

  return (
    <li>
      <h4 style={getStatusStyle(item.status)}>{item.title}</h4>
      <p>{item.description}</p>
      <span style={{ color: getStatusStyle(item.status).color }}>{item.status}</span>
    </li>
  );
};

export default ItemCard;
