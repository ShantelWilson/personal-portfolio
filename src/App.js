import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar"; 
import { Banner } from "./components/Banner";
import { Skills } from './components/Skills';
import { Footer } from './components/Footer'
import { Projects } from './components/Project';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
  