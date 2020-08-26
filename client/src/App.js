import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Container } from 'reactstrap';
import ItemModel from './components/ItemModel';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <ItemModel />
        <ShoppingList />
      </Container>
    </div>
  );
}

export default App;
