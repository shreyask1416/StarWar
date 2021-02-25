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
import SpeciesDetails from '../SpeciesDetails';
import FilmDetails from '../FilmDetails';
import PlanetDetails from '../PlanetDetails';
import CharacterDetails from '../CharacterDetails';
import StarshipDetails from '../StarshipDetails';
import VehicleDetails from "../VehicleDetailsTsx"
import VehicleDetailsTsx from '../VehicleDetailsTsx';
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
                  <NavLink to="/Navbar/Films" activeClassName={styles.selected} >FILMS</NavLink>
                </li>
                <li>
                  <NavLink to="/Navbar/Species" activeClassName={styles.selected} >SPECIES</NavLink>
                </li>
                <li>
                  <NavLink to="/Navbar/Planets" activeClassName={styles.selected}>PLANETS</NavLink>
                </li>
                <li>
                  <NavLink to="/Navbar/Characters" activeClassName={styles.selected}>CHARACTERS</NavLink>
                </li>
                <li>
                  <NavLink to="/Navbar/Starships" activeClassName={styles.selected}>STARSHIPS</NavLink>
                </li>
                <li>
                  <NavLink to="/Navbar/Vehicles" activeClassName={styles.selected}>VEHICLES</NavLink>
                </li>

              </ul>
            </nav>
            <div className={styles.lines}></div>

            <Switch>
              <Route exact path="/Navbar/Films">
                <Films />
              </Route>
              <Route exact path="/Navbar/Species">
                <Species />
              </Route>
              <Route exact path="/Navbar/Planets">
                <Planets />
              </Route>
              <Route exact path="/Navbar/Characters">
                <Characters />
              </Route>
              <Route exact path="/Navbar/Starships">
                <Starships />
              </Route>
              <Route exact path="/Navbar/Vehicles">
                <Vehicles />
              </Route>
              <Route exact path="/Navbar/Films/FilmDetails">
                <FilmDetails />
              </Route>
              <Route exact path="/Navbar/Species/SpeciesDetails">
                <SpeciesDetails />
              </Route>
              <Route exact path="/Navbar/Planets/PlanetDetails">
                <PlanetDetails />
              </Route>
              <Route exact path="/Navbar/Characters/CharacterDetails">
                <CharacterDetails />
              </Route>
              <Route exact path="/Navbar/Starships/StarshipDetails">
                <StarshipDetails />
              </Route>
              <Route exact path="/Navbar/Vehicles/VehicleDetails">
                <VehicleDetailsTsx/>
              </Route>
            </Switch>

          </div>
        </Router>


      </div>
    </div>
  );
};




export default Navbar;