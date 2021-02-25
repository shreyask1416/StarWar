import React from 'react';

import styles from './StarshipDetails.module.css';
import {useHistory} from "react-router-dom";
import {useSpeciesContext} from "../../SpeciesContext";
const StarshipDetails = () => {
  let history=useHistory();
  const {name,classs,designation,lang,consumables,drive,mglt,sclass,height,haircolor,eyecolr,skinclr,birthyear}=useSpeciesContext();
return (
<div className={styles.StarshipDetails }>
<div className={styles.box} >
               <div className={styles.imgs} onClick={()=>history.push("/Navbar/Starships")}>
               <img src={"https://picsum.photos/200/300/?random&cb=" + (+new Date()) + ""}></img></div>
               <div className={styles.info}>
                 <h1>{name} </h1>
                 <h2 className={styles.height}>Model : <span className={styles.hei}> {classs} </span></h2>
                 <h2 className={styles.height}>Manufacturer: <span className={styles.hei}>{designation} </span></h2>
                 <h2 className={styles.height}>Cost in Credits : <span className={styles.hei}> {height} </span></h2>
                 <h2 className={styles.height}>Length : <span className={styles.hei}>{haircolor} </span></h2>
                 <h2 className={styles.height}>Crew : <span className={styles.hei}> {eyecolr} </span></h2>
                 <h2 className={styles.height}>Max atmosphering speed : <span className={styles.hei}> {skinclr} </span></h2>
                 <h2 className={styles.height}>Passengers : <span className={styles.hei}> {birthyear} </span></h2>
                 <h2 className={styles.height}>Cargo Capacity : <span className={styles.hei}> {lang} </span></h2>
                 <h2 className={styles.height}>Consumables : <span className={styles.hei}> {consumables} </span></h2>
                 <h2 className={styles.height}>Hyperdrive Rating : <span className={styles.hei}> {drive} </span></h2>
                 <h2 className={styles.height}>MGLT : <span className={styles.hei}> {mglt} </span></h2>
                 <h2 className={styles.height}>Starship class: <span className={styles.hei}> {sclass} </span></h2>
               </div>
              
             </div>
</div>
);
};




export default StarshipDetails;