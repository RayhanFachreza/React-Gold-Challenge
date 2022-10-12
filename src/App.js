import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from './pages/HomePage'
import CariMobil from './pages/CariMobil'
import Detailsewa from './pages/detail paket sewa mobil';
import Hasilpencarian from './pages/hasil pencarian';
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
      <>
        <Header />
          <Routes> 
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cari-mobil" element={<CariMobil/>}/>
            <Route path="/detail-paket-sewa-mobil" element={<Detailsewa/>}/>
            <Route path="/Hasil-Pencarian" element={<Hasilpencarian/>}/>
          </Routes>
        <Footer />
      </>
  );
  
}

export default App;
