import React, { useState } from "react";
import styles from "./Characters.module.css";
import { useSpeciesContext} from "../../SpeciesContext";
import {useHistory} from 'react-router-dom';
const Characters = () => {
  let history=useHistory();
  const [charcter, setCharacter] = React.useState();
  const [Details, setDetails] = React.useState([]);
  const {setName,setGender,setMass ,setHeight ,setHaircolor, setEyecolr,setSkinclr,setBirthYear,setLang }=useSpeciesContext();
 
  const [prev, setPrev] =React.useState(false);
  const [next, setNext] =React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const getCharcter = async () => {
    setLoading(true);
    await fetch(`https://swapi.dev/api/people/`)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
        if(responseData.previous === null) {


          setPrev(true);
          }
          if(responseData.next === null) {
          setNext(true);
          }
        setDetails(responseData.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
const nextCharcater = async (charcter:any) => {
    setLoading(true);
    await fetch(charcter.next)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
        if(responseData.next === null) {
          setNext(true);
          }
          if(responseData.prev !== null) {
          setPrev(false);
          }
        setDetails(responseData.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const previousCharcater = async (charcter:any) => {
    setLoading(true);
    await fetch(charcter.previous)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
        if(responseData.previous === null) {
          setPrev(true);
          }
          if(responseData.next !== null) {
          setNext(false);
          }
        setDetails(responseData.results);
        setLoading(false);
                })
      .catch((error) => {
        console.log(error);
      });
  }
React.useEffect(() => {
    getCharcter();
  }, []);
  return (
    <div className={styles.Characters}>
       {loading && <div className={styles.loading}>
<h1>Loading ... </h1>
</div>}
     
        <div>
          {!loading && Details.map((item: any) => {
            return (

              <h1 onClick={() => {
               
                setName(item.name)
                setGender(item.gender)
                setHeight(item.height)
                setMass(item.mass)
                setHaircolor(item.hair_color)
                setSkinclr(item.skin_color)
                setBirthYear(item.birth_year)
                setEyecolr(item.eye_color)
                history.push('/Navbar/Characters/CharacterDetails');
              }
              } >{item.name}</h1>

            )
          })}
          <div className={styles.button}>
{!prev? <button onClick={()=>previousCharcater(charcter)}>Previous</button> : <button className={styles.active}>Previous</button>}
{!next? <button onClick={()=>nextCharcater(charcter)}>Next</button> : <button className={styles.active}>Next</button>}
</div> 
         
        </div>
      
    </div>
  );
};




export default Characters;