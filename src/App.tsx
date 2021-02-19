import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from "./components/Navbar/Navbar";
import Films from './components/Films/Films';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Navbar">
          <Navbar />
        
        </Route>
      </Switch>
      </Router>
      {/* <Navbar/> */}
      <Footer/>
    </div>
  );
}

export default App;
