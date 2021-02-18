import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from "../../StarWarDesign/Art Assets/logo.png";
import foologo from "../../StarWarDesign/Art Assets/footer_logo.png"
import Species from "../Species/Species";
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
          <img src={logo} />
        </div>
        <div className={styles.line}></div>

        <Router>

          <nav className={styles.nav}>
            <ul className="list">
              <li>
                <NavLink exact activeClassName={styles.selected} className="Films" to="/Films">FILMS</NavLink>
              </li>
              <li >
                <NavLink activeClassName={styles.selected} className="species" to="/Species">SPECIES</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selected} className="planets" to="/Planets">PLANETS</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName= {styles.selected} className="Character" to="/Characters">CHARACTERS</NavLink>
              </li>
              <li >
                <NavLink activeClassName={styles.selected} className="sshp" to="/Starships">STARSHIPS</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selected} className="vehi" to="/Vehicles">VEHICLES</NavLink>
              </li>

            </ul>
            <div className={styles.lines}></div>

            <Switch>
              <Route exact path="/Films"><Films />
              </Route>
              <Route exact path="/Species"><Species />
              </Route>
              <Route exact path="/Planets"><Planets/>
              </Route>
              <Route exact path="/Characters"><Characters />
              </Route>
              <Route exact path="/Starships"><Starships/>
              </Route>
              <Route exact path="/Vehicles"><Vehicles/>
              </Route>
           
            </Switch>
          </nav>

        </Router>


        {/* <div className={styles.line2}>

                </div>
                <div className={styles.fooo}>
                <h1>TERMS OF USE</h1>
                    <h1>LEGAL NOTICES</h1>
                    <h1>PRIVACY POLICY</h1>
                    <h1>STAR WARS HELPDESK</h1>
                    <h1>STAR WARS AT DISNEY STORE</h1>
                </div>
                <div className={styles.Foo}>
                    <img src={foologo}></img>
                    <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
                </div> */}

      </div>
    </div>
  );
};




export default Navbar;