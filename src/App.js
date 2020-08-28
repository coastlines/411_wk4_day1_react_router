import React from 'react';
import Navigation from './components/Navigation'
// Write imports for Router & BrowserRouter here //
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import './App.css'

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navigation />
          <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
