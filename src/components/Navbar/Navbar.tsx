import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from "../../StarWarDesign/Art Assets/logo.png";
import foologo from "../../StarWarDesign/Art Assets/footer_logo.png"
import Species from "../Species/Species";
import Footer from "../Footer/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import Films from '../Films/Films';
import Planets from '../Planets/Planets';
import Characters from '../Characters/Characters';
import Starships from '../Starships/Starships';
import Vehicles from '../Vehicles/Vehicles';
const Navbar = () => {

  return (
    <div className={styles.Navbar}>
      <div className={styles.bkg}>
        <div className={styles.logostyle}>
        <NavLink exact to="/">
          <img src={logo} />
          </NavLink>
        </div>
        <div className={styles.line}></div>

        <Router>
         <div className={styles.media}>
          <nav className={styles.nav}>
            <ul className="list">
              <li>
                <NavLink exact activeClassName={styles.selected} className="Films" to="/Navbar/Films">FILMS</NavLink>
              </li>
              <li >
                <NavLink activeClassName={styles.selected} className="species" to="/Navbar/Species">SPECIES</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selected} className="planets" to="/Navbar/Planets">PLANETS</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName= {styles.selected} className="Character" to="/Navbar/Characters">CHARACTERS</NavLink>
              </li>
              <li >
                <NavLink activeClassName={styles.selected} className="sshp" to="/Navbar/Starships">STARSHIPS</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selected} className="vehi" to="/Navbar/Vehicles">VEHICLES</NavLink>
              </li>

            </ul>
            </nav>
            <div className={styles.lines}></div>

            <Switch>
              <Route exact path="/Navbar/Films"><Films />
              </Route>
              <Route exact path="/Navbar/Species"><Species />
              </Route>
              <Route exact path="/Navbar/Planets"><Planets/>
              </Route>
              <Route exact path="/Navbar/Characters"><Characters />
              </Route>
              <Route exact path="/Navbar/Starships"><Starships/>
              </Route>
              <Route exact path="/Navbar/Vehicles"><Vehicles/>
              </Route>
           
            </Switch>
         
          </div>
        </Router>


      </div>
    </div>
  );
};




export default Navbar;