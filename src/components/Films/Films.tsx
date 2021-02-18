import React,{useState,useEffect} from "react";
import styles from "./Films.module.css"
const Films = () => {
    const [charcter, setCharacter] = useState();
    const [offset, setOffset] = useState(9);
    const [Previouspage, setprevious] =useState(true);
    const [Details, setDetails] = useState([]);
    const [lastPage, setLastPage] =useState(false);
    const increaseOffset = () => {
      if (!lastPage) {
        setOffset((prev) => prev + 1);
      }
      
    };
  
    const getCharcter = async () => {
      await fetch(`https://swapi.dev/api/films/`)
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
         console.log(responseData);
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
          console.log(responseData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
  
  
  
  useEffect(() => {
      getCharcter();
    }, []);
    // console.log("grishmi", charcter.previous);
  
    return (
        <div className={styles.Films}>
            <div>
            {Details.map((item:any)=>{
              return(
                <h1>{item.title}</h1>
              )
            })}
            </div>
           </div>
    );
};




export default Films;