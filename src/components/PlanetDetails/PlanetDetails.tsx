import React from 'react';
import { useSpeciesContext} from "../../SpeciesContext";
import styles from './PlanetDetails.module.css';

const PlanetDetails = () => {
    const {name,classs,designation,height,haircolor,eyecolr,skinclr,birthyear,lang}=useSpeciesContext();
return (
<div className={styles.PlanetDetails }>
<div className={styles.box} >
               <div className={styles.imgs}>
               <img src={"https://picsum.photos/200/300/?random&cb=" + (+new Date()) + ""}></img></div>
               <div className={styles.info}>
                 <h1>{name} </h1>
                 <h2 className={styles.height}>Rotation Period : <span className={styles.hei}> {classs} </span></h2>
                 <h2 className={styles.height}>Orbital Period : <span className={styles.hei}>{designation} </span></h2>
                 <h2 className={styles.height}>Diameter : <span className={styles.hei}> {height} </span></h2>
                 <h2 className={styles.height}>Climate : <span className={styles.hei}>{haircolor} </span></h2>
                 <h2 className={styles.height}>Gravity : <span className={styles.hei}> {eyecolr} </span></h2>
                 <h2 className={styles.height}>Terrain : <span className={styles.hei}> {skinclr} </span></h2>
                 <h2 className={styles.height}>Surface Water : <span className={styles.hei}> {birthyear} </span></h2>
                 <h2 className={styles.height}>Population : <span className={styles.hei}> {lang} </span></h2>
               </div>
              
             </div>
</div>
);
};




export default PlanetDetails;