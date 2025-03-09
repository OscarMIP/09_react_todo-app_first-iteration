import React from 'react';
import Header from './Header';
import Subheader from './Subheader';
import ListContainer from './ListContainer';

const itemsData = [
  { title: 'Buy Groceries', description: 'Need to buy milk, eggs, and bread.', status: 'in progress' },
  { title: 'Walk the Dog', description: 'Take Sparky for a walk in the park.', status: 'done' },
  { title: 'Finish Project', description: 'Complete the React project for work.', status: 'pending' }
];

const App = () => {
  return (
    <div>
      <Header />
      <Subheader subtitle="Todo List Manager" />
      <ListContainer headerContent="Todo List" itemsList={itemsData} />
      {/* Otros componentes y contenido */}
    </div>
  );
};

export default App;



