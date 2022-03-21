//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CombatManager from './components/combatgeneration/CombatManager';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import UnitCreation from './components/unitgeneration/UnitCreation';
import UnitList from './components/unitsearchlist/UnitList';


function CombatGenerator() {

  return (
    <Router>
    <header className='banner'><Header/></header>
      <Routes>
        <Route path='/' element={<MainPage/>} /> 
        <Route path='/CombatManager' element={<CombatManager/>} />
        <Route path='/UnitCreation' element={<UnitCreation/>} />
        <Route path='/UnitList' element={<UnitList/>} />
        <Route path='*' element={<Error404/>}/>
      </Routes>
    <footer><Footer/></footer>
    </Router>
  );
}

export default CombatGenerator;