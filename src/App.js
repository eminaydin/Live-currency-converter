import React from 'react';
import './App.css';
import { Container, Input, Select, Button, Dropdown } from 'semantic-ui-react';
function App() {
  return (<Container className="app">
    <Container className="header">
      <h1>pickar</h1>
      <h1>Conver currencies in real-time.</h1>

      <Container className="calculator">
        <Input />
        <Dropdown
          placeholder='select currency'
          selection

        />
        <Dropdown
          placeholder='select currency'
          selection

        />
        <Button content="Convert" color="red" />
      </Container>
      <p>View conversion history </p>
    </Container>
  </Container>
  )
}

export default App;
