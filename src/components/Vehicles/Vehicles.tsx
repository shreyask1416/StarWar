import React from "react";
import styles from "./Vehicles.module.css"
const Vehicles = () => {
    
    const [charcter, setCharacter] = React.useState();
    const [offset, setOffset] = React.useState(5);
    const [Previouspage, setprevious] = React.useState(true);
    const [Details, setDetails] = React.useState([
    ]);
    const [lastPage, setLastPage] = React.useState(false);
    const increaseOffset = () => {
      if (!lastPage) {
        setOffset((prev) => prev + 1);
      }
    };
  
    const getCharcter = async () => {
      await fetch(`https://swapi.dev/api/vehicles/`)
        .then((response) => response.json())
        .then((responseData) => {
          setCharacter(responseData);
          setDetails(responseData.results);
          // console.log(responseData);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
  
    const nextCharcater = async (charcter:any) => {
      await fetch(charcter.next)
        .then((response) => response.json())
        .then((responseData) => {
          setCharacter(responseData);
          setDetails(responseData.results);
          // console.log(responseData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const previousCharcater = async (charcter:any) => {
      await fetch(charcter.previous)
        .then((response) => response.json())
        .then((responseData) => {
          setCharacter(responseData);
          setDetails(responseData.results);
          // console.log(responseData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
  
  
  
    React.useEffect(() => {
      getCharcter();
    }, []);
      return (
          <div className={styles.Vehicles}>
               <div>
              {Details.map((item:any)=>{
                return(
  
                  <h1>{item.name}</h1>
  
                )
              })}
               {Previouspage ?( 
            <button className={styles.prev} onClick={() => {setprevious(!Previouspage)}}>PREVIOUS</button>):
            <button className={styles.prevs} onClick={() => {previousCharcater(charcter);setprevious(!Previouspage)}}>PREVIOUS</button>}
            <button className={styles.next} onClick={() => {nextCharcater(charcter);setprevious(false)}}>NEXT</button>
              </div>
             </div>
      );
  };




export default Vehicles;