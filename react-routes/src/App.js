import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HogwartNavbar from './components/HogwartNavbar';
import Home from './components/Home';
import Entities from './EntityDescription';
import CategoryList from './CategoryList';

const App = () => {
  const STATE_MAP = {
    potions: [
      { id: 1, name: 'Polyjuice Potion', description: 'This potion allows the drinker to take on the appearance of someone else.' },
      { id: 2, name: 'Felix Felicis', description: 'This potion grants the drinker luck for a period of time.' },
    ],
    charms: [
      { id: 1, name: 'Accio', description: 'Summons an object to the caster, potentially over a significant distance.' },
      { id: 2, name: 'Expelliarmus', description: 'Causes whatever the victim is holding to fly out of their hand.' },
    ],
  }

  return (
    <Router>
      <div className="App">
        <HogwartNavbar />
        <CategoryList categories={['potions', 'charms']} />
      </div>
      <Routes>
        <Route path="/" element={<Home categories={['potions', 'charms']} />} />
        <Route path="/wiki/:category" element={<Entities STATE_MAP={STATE_MAP} />} />
      </Routes>
    </Router>
  );
}

export default App;
