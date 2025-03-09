import React from 'react';
import ListHeader from './ListHeader';
import ItemsList from './ItemsList';

const ListContainer = ({ headerContent, itemsList }) => {
  return (
    <div>
      <ListHeader content={headerContent} />
      <ItemsList itemsList={itemsList} />
    </div>
  );
};

export default ListContainer;
