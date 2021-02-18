import React from "react";
import styles from "./Species.module.css"
const Species = () => {
    const [charcter, setCharacter] = React.useState();
    const [offset, setOffset] = React.useState(5);
    const [Previouspage, setprevious] = React.useState(true);
    const [Details, setDetails] = React.useState([]);
    const [lastPage, setLastPage] = React.useState(false);
    const increaseOffset = () => {
      if (!lastPage) {
        setOffset((prev) => prev + 1);
      }
    };
  
    const getCharcter = async () => {
      await fetch(`https://swapi.dev/api/species/`)
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
        <div className={styles.Species}>
               <div>
            {Details.map((item:any)=>{
              return(

                <h1>{item.name}</h1>

              )
            })}
            <button onClick={()=>previousCharcater(charcter)}>Previous</button>
            <button onClick={()=>nextCharcater(charcter)}>Next</button>
            </div>
           </div>
    );
};




export default Species;