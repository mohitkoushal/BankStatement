import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import BankStatementConverter from './Components/BankStatementConverter';

const App = () => {
  return (
    <Container>
      <BankStatementConverter />
    </Container>
  );
};

export default App;
