import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { CacheProvider } from './context/CacheContext';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
