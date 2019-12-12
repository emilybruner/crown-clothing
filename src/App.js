import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import {Route} from 'react-router-dom';
import HatsPage from './pages/hatspage/hatspage.component';


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
