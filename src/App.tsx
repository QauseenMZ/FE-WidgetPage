import React from 'react';
import logo from './logo.svg';
import MainPage from './components/MainPage/MainPage';
import Container from '@material-ui/core/Container';

import './App.css';

function App() {
  return (
    <Container maxWidth="sm">
      <MainPage/>
    </Container>
  );
}

export default App;
