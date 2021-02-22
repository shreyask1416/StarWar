import React,{useState,useEffect} from "react";
import styles from "./Films.module.css";
import newhope from "../../StarWarDesign/Art Assets/Topics/NewHope.png";
import { isTemplateExpression } from "typescript";
const Films = () => {
  const [charcter, setCharacter] = React.useState();
  const [Details, setDetails] = React.useState([]);
  const [prev, setPrev] =React.useState(false);
  const [next, setNext] =React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [detailsScreenStatus, setDetailsScreenStatus] = useState(true);
  const [title,setTitle]=React.useState();
  const [epId,setEpId]=React.useState();
  const [director,setDirector]=React.useState();
  const [producer,setProducer]=React.useState();
  const [releaseDate,setReleaseDate]=React.useState();
  const [opening,setOpening]=React.useState();
    const getCharcter = async () => {
      setLoading(true);
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
        <div className={styles.Films}>
            {loading && <div className={styles.loading}>
<h1>Loading ... </h1>
</div>}
{detailsScreenStatus ?
             <div>
              {Details.map((item:any)=>{
                return(
  
                  <h1 onClick={() => {
                    setDetailsScreenStatus(false);
                    setTitle(item.title);
                    setEpId(item.episode_id);
                    setDirector(item.director);
                    setProducer(item.producer);
                    setReleaseDate(item.release_date);
                    setOpening(item.opening_crawl)
                  }
                  } >{item.title}</h1>
  
                )
              })}
             
              </div>
              :
              <div className={styles.box} >
              <div className={styles.imgs} onClick={() => setDetailsScreenStatus(true)}>
              <img src={"https://picsum.photos/200/300/?random&cb=" + (+new Date()) + ""}></img></div>
              <div className={styles.info}>
                <h1>{title}</h1>
                <h2 className={styles.height}>Episode Id : <span className={styles.hei}>{epId}</span></h2>
                <h2 className={styles.height}>Director : <span className={styles.hei}>{director}  </span></h2>
                <h2 className={styles.height}>Producer : <span className={styles.hei}> {producer} </span></h2>
                <h2 className={styles.height}>Release Date : <span className={styles.hei}> {releaseDate}</span></h2>
                <h2 className={styles.height}>Opening Crawl : <span className={styles.hei}> {opening} </span></h2>
                
              </div>
             
            </div>
          }
           </div>
    );
};




export default Films;