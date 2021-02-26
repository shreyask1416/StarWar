import React,{useState,useEffect} from "react";
import styles from "./Films.module.css";
import { useSpeciesContext} from "../../SpeciesContext";
import {useHistory} from 'react-router-dom';
const Films = () => {
  const [charcter, setCharacter] = React.useState();
  const [Details, setDetails] = React.useState([]);
  const [prev, setPrev] =React.useState(false);
  const [next, setNext] =React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const {setTitle,setEpId,setOpening,setDirector,setProducer,setReleaseDate,title }=useSpeciesContext();
  let history=useHistory();
    const getCharcter = async () => {
    
      if(sessionStorage.getItem('films')){
        setDetails(JSON.parse(sessionStorage.getItem('films')||'{}'))
        
      }
      else{
      await fetch(`https://swapi.dev/api/films/`)
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
    
          sessionStorage.setItem('films',JSON.stringify(responseData.results));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
    
  React.useEffect(() => {
      getCharcter();
    }, []);
    return (
        <div className={styles.Films}>
            {/* {loading && <div className={styles.loading}>
<h1>Loading ... </h1>
</div>} */}

             <div>
              {Details.map((item:any)=>{
                return(
  
                  <h1 onClick={() => {
                   
                    setTitle(item.title);
                    setEpId(item.episode_id);
                    setDirector(item.director);
                    setProducer(item.producer);
                    setReleaseDate(item.release_date);
                    setOpening(item.opening_crawl);
                    history.push('/Navbar/Films/FilmDetails');
                  }
                  } >{item.title}</h1>
  
                )
              })}
             
              </div>

       
           </div>
    );
};




export default Films;