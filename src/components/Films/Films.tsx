import React,{useState,useEffect} from "react";
import styles from "./Films.module.css";
import { useSpeciesContext} from "../../SpeciesContext";
import {useHistory, useRouteMatch, Switch, Route, NavLink} from 'react-router-dom';
const Films = () => {
  const [charcter, setCharacter] = React.useState();
  const [Details, setDetails] = React.useState([]);
  const [prev, setPrev] =React.useState(false);
  const [next, setNext] =React.useState(false);
  let history=useHistory();
  const {url} = useRouteMatch();
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
          <div>
              {Details.map((item:any)=>{
                const id = item.url.split('/');
                return(
  
                  <h1 onClick={() => {
                    history.push(`${url}/${id[5]}`)
                  }
                  } >{item.title}</h1>
  
                )
              })}
             
              </div>

       
           </div>
    );
};




export default Films;