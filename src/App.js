import React from 'react';
import Header from './Header';
import './App.css';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/chat'> </Route>
          <Route path='/' element={<TinderCards />}> </Route>
        </Routes>
      </Router>



    </div>
  );
}

export default App;

        {/* Header */}
        {/* Tinder Cards */}
        {/* Buttons below tinder cards */}

        {/* Chats Screen */}
        {/* Individual chat screen */}