import React, { useState } from "react";
import styles from "./Characters.module.css"
const Characters = () => {
  const [charcter, setCharacter] = React.useState();
  const [offset, setOffset] = React.useState(5);
  const [flatlist, setflatlist] = React.useState(true);
  const [Previouspage, setprevious] = React.useState(true);
  const [Details, setDetails] = React.useState([]);
  const [Detailss, setDetailss] = React.useState([]);
  const [lastPage, setLastPage] = React.useState(false);
  const [name, setName] = useState()
  const [gender, setGender] = useState()
  const [height, setHeight] = useState()
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
  console.log("lets know", Details);
  console.log("grishmaaa", typeof (Details));



  const nextCharcater = async (charcter: any) => {
    await fetch(charcter.next)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
        setDetails(responseData.results);
        setOffset((prev) => prev + 1);
        // console.log(responseData);
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
        <div onClick={() => setDetailsScreenStatus(true)}>
          <h1>{height}</h1>
          <h2>{name}</h2>
        </div>
      }
    </div>
  );
};




export default Characters;