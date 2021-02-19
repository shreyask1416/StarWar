import React from "react";
import styles from "./Species.module.css"
const Species = () => {
    const [charcter, setCharacter] = React.useState();
    const [Details, setDetails] = React.useState([]);
    const [prev, setPrev] =React.useState(false);
    const [next, setNext] =React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const getCharcter = async () => {
      setLoading(true);
      await fetch(`https://swapi.dev/api/species/`)
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
        <div className={styles.Species}>
          {loading && <div className={styles.loading}>
<h1>Loading ... </h1>
</div>}
             <div>
               
              {!loading && Details.map((item:any)=>{
                return(
  
                  <h1>{item.name}</h1>
  
                )
              })}
              {!loading && <div className={styles.button}>
{!prev? <button onClick={()=>previousCharcater(charcter)}>Previous</button> : <button className={styles.active}>Previous</button>}
{!next? <button onClick={()=>nextCharcater(charcter)}>Next</button> : <button className={styles.active}>Next</button>}
</div> }
              </div>
           </div>
    );
};




export default Species;