import React from 'react';

import Form from './views/Form';
import ListOfContacts from './views/ListOfContacts';

import './App.css';

function App() {
  return (
    <div className="App">
      <Form />
      <ListOfContacts />
    </div>
  );
}

export default App;
