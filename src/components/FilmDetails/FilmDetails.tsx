import React,{useEffect, useState} from 'react';
import styles from './FilmDetails.module.css';
import { useSpeciesContext} from "../../SpeciesContext";
const FilmDetails = () => {
    const {title,epId,director,producer,releaseDate,opening}=useSpeciesContext();
    const [img,setImg]=useState<any>();
    const getImage=()=>{
      if(sessionStorage.getItem(`${title}imgs`)){
         setImg(sessionStorage.getItem(`${title}imgs`)||'{}')
      }
      else{
      const url="https://picsum.photos/200/300/?random&cb=" + (+new Date()) + "";
      setImg(url);
      sessionStorage.setItem(`${title}imgs`,url);
      }
    }
    React.useEffect(() => {
      getImage();
    }, [title]);
return (
<div className={styles.FilmDetails }>
<div className={styles.box} >
              <div className={styles.imgs}>
              <img src={img}></img></div>
              <div className={styles.info}>
                <h1>{title}</h1>
                <h2 className={styles.height}>Episode Id : <span className={styles.hei}>{epId}</span></h2>
                <h2 className={styles.height}>Director : <span className={styles.hei}>{director}  </span></h2>
                <h2 className={styles.height}>Producer : <span className={styles.hei}> {producer} </span></h2>
                <h2 className={styles.height}>Release Date : <span className={styles.hei}> {releaseDate}</span></h2>
                <h2 className={styles.height}>Opening Crawl : <span className={styles.hei}> {opening} </span></h2>
                
              </div>
             
            </div>
</div>
);
};




export default FilmDetails;