import React from 'react';
import styles from 'styled-components'
import Helmet from 'react-helmet';
import './App.css';
import Header from './components/Header'
import Home from './components/HomePage/Home'

function App() {
  return (
    <Container>
      <Helmet>
        <title>Disney plus clone</title>
      </Helmet>
      <Header/>
      <Home/>
    </Container>
  );
}

export default App;

const Container = styles.div`

`