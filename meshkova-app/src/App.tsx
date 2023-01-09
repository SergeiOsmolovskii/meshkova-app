import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './pages/mainPage';

function App() {
  return (
    <>
      <Header />
      <Box component="main">
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
