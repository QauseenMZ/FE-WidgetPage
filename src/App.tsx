import React from 'react';
import logo from './logo.svg';
import { Router } from 'react-router-dom';
import history from './utils/history';
import MainPage from './components/MainPage/MainPage';
import Container from '@material-ui/core/Container';

import './App.css';

const App = () => {
  return (
    <Router history={history}>
      <Container maxWidth="sm">
        <MainPage/>
      </Container>
    </Router>
  );
}

export default App;
