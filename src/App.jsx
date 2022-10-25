import './components/tag/Tag'
import { data } from './data/logements';
import Footer from './components/footer/Footer';
import Home from './views/Home/Home';
import About from './views/About/About';
import Error404 from './views/Error404/Error404';
import React from 'react';
import Header from './components/header/Header';
import House from './views/House/House';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.StrictMode>
      <div className="content-wrap">
        {/*Composant Header*/}
        <Header />
        {/*Définition des routes */}
        <Routes>
          <Route exact path='/' element={<Home data={data} />} />
          <Route exact path='/house/:id' element={<House />} />
          <Route exact path='/about' element={<About />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
      {/*Composant Footer */}
      <Footer />
    </React.StrictMode>
  )
}

export default App;