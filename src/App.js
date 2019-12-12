import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import {Route} from 'react-router-dom';



function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
  
    </div>
  );
}

export default App;
