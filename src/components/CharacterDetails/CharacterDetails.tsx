import React from 'react';
import { useSpeciesContext} from "../../SpeciesContext";
import styles from './CharacterDetails.module.css';
import {useHistory} from 'react-router-dom';

const CharacterDetails = ()=> {
    let history=useHistory();
    const {name,gender,mass,height,haircolor,eyecolr,skinclr,birthyear}=useSpeciesContext();
return (
<div className={styles.CharacterDetails }>
<div className={styles.box} >
          <div className={styles.imgs} onClick={()=> history.push('/Navbar/Characters')}>
          <img src={"https://picsum.photos/200/300/?random&cb=" + (+new Date()) + ""}></img></div>
          <div className={styles.info}>
            <h1>{name}</h1>
            <h2 className={styles.height}>Height : <span className={styles.hei}>{height}</span></h2>
            <h2 className={styles.height}>Gender : <span className={styles.hei}>{gender}</span></h2>
            <h2 className={styles.height}>Mass : <span className={styles.hei}>{mass}</span></h2>
            <h2 className={styles.height}>Hair Color : <span className={styles.hei}>{haircolor}</span></h2>
            <h2 className={styles.height}>Eye color : <span className={styles.hei}>{eyecolr}</span></h2>
            <h2 className={styles.height}>Skin Color : <span className={styles.hei}>{skinclr}</span></h2>
            <h2 className={styles.height}>Birth Year : <span className={styles.hei}>{birthyear}</span></h2>
          </div>
         
        </div>
</div>
);
};




export default CharacterDetails;