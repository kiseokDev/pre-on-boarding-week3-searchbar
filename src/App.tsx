import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Search from './page/Search';
import { CacheProvider } from './context/CacheContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <CacheProvider>
        <Search></Search>
      </CacheProvider>
    </>
  );
}

export default App;
