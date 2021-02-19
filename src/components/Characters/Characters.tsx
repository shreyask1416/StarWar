import React, { useState } from "react";
import styles from "./Characters.module.css";
import yoda from "../../StarWarDesign/Art Assets/Topics/yoda.png";
const Characters = () => {
  const [charcter, setCharacter] = React.useState();
  const [offset, setOffset] = React.useState(5);
  const [Previouspage, setprevious] = React.useState(true);
  const [Details, setDetails] = React.useState([]);
  const [lastPage, setLastPage] = React.useState(false);
  const [name, setName] = useState()
  const [gender, setGender] = useState()
  const [height, setHeight] = useState()
  const [mass,setMass]=useState()
  const [haircolor,setHaircolor]=useState()
  const [skinclr,setSkinclr]=useState()
  const [eyecolr,setEyecolr]=useState()
  const [birthyear,setBirthYear]=useState()
  const [detailsScreenStatus, setDetailsScreenStatus] = useState(true);
  const increaseOffset = () => {
    if (!lastPage) {
      setOffset((prev) => prev + 1);
    }
  };


  const getCharcter = async () => {
    await fetch(`https://swapi.dev/api/people/`)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
        setDetails(responseData.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const nextCharcater = async (charcter: any) => {
    await fetch(charcter.next)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
        setDetails(responseData.results);
        setOffset((prev) => prev + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const previousCharcater = async (charcter: any) => {
    await fetch(charcter.previous)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
        setDetails(responseData.results);
        setOffset((prev) => prev - 1);

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
      {detailsScreenStatus ?
        <div>
          {Details.map((item: any) => {
            return (

              <h1 onClick={() => {
                setDetailsScreenStatus(false);
                setName(item.name)
                setGender(item.gender)
                setHeight(item.height)
                setMass(item.mass)
                setHaircolor(item.hair_color)
                setSkinclr(item.skin_color)
                setBirthYear(item.birth_year)
                setEyecolr(item.eye_color)
              }
              } >{item.name}</h1>

            )
          })}
          {Previouspage ?( 
          <button className={styles.prev} onClick={() => {setprevious(!Previouspage)}}>PREVIOUS</button>):
          <button className={styles.prevs} onClick={() => {previousCharcater(charcter);setprevious(!Previouspage)}}>PREVIOUS</button>}
          <button className={styles.next} onClick={() => {nextCharcater(charcter);setprevious(false)}}>NEXT</button>
        </div>
        :
        <div className={styles.box} >
          <div className={styles.imgs} onClick={() => setDetailsScreenStatus(true)}>
          <img src={yoda}></img></div>
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
      }
    </div>
  );
};




export default Characters;